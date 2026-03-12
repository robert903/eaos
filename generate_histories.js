const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const WORKSPACE_ID = "9011973539";
const API_TOKEN = "pk_81504514_F5O5ZPW9NSYRQEFLG18LZXGN2MUGYE79";

function callMcp(toolName, argsObj) {
  return new Promise((resolve) => {
    const child = spawn('npx', ['-y', 'clickup-mcp-server'], {
      env: { ...process.env, process: undefined, CLICKUP_API_TOKEN: API_TOKEN }
    });

    let output = '';
    let resolved = false;

    child.stdout.on('data', (data) => {
      output += data.toString();
      const lines = output.split('\n');
      for (const line of lines) {
        if (line.includes('"id":2') || line.includes('"id": 2')) {
           try {
             const resp = JSON.parse(line);
             if (!resolved) {
                 resolved = true;
                 child.kill(); 
                 if (resp.result?.isError) {
                     resolve({ error: resp.result.content[0].text });
                 } else {
                     try {
                         resolve({ data: JSON.parse(resp.result.content[0].text) });
                     } catch(err) {
                         resolve({ error: "Failed to parse content: " + resp.result.content[0].text });
                     }
                 }
             }
           } catch (e) { }
        }
      }
    });

    child.on('close', () => {
       if (!resolved) { resolve({ error: "Process closed without returning a result. Output: " + output }); }
    });

    const initPayload = JSON.stringify({
      jsonrpc: "2.0", id: 1, method: "initialize",
      params: { protocolVersion: "2024-11-05", capabilities: {}, clientInfo: { name: "test-client", version: "1.0.0" } }
    });

    const callPayload = JSON.stringify({
      jsonrpc: "2.0", id: 2, method: "tools/call",
      params: { name: toolName, arguments: argsObj }
    });

    child.stdin.write(initPayload + '\n');
    setTimeout(() => { child.stdin.write(callPayload + '\n'); }, 300); 
  });
}

function formatDate(timestamp) {
    if (!timestamp) return "Not set";
    return new Date(parseInt(timestamp)).toLocaleString();
}

async function fetchTaskComments(taskId) {
    const res = await callMcp('get_task_comments', { task_id: taskId });
    if (res.error || !res.data || !res.data.comments) return [];
    return res.data.comments;
}

async function processSpaceData(space) {
    console.log(`\n================================`);
    console.log(`Processing Space: ${space.name} (ID: ${space.id})`);
    
    let markdown = `# Task History Report: ${space.name}\n\n`;
    markdown += `**Generated on**: ${new Date().toLocaleString()}\n`;
    markdown += `**Space ID**: ${space.id}\n\n---\n\n`;

    const spaceListsRes = await callMcp('get_lists', { container_type: 'space', container_id: space.id });
    
    if (spaceListsRes.error || !spaceListsRes.data || !spaceListsRes.data.lists) {
        markdown += `> ⚠️ **Error fetching lists:** ${spaceListsRes.error || "No lists available"}\n`;
    } else {
        for (const list of spaceListsRes.data.lists) {
            console.log(`  -> List: ${list.name}`);
            markdown += `## 📋 List: ${list.name}\n\n`;
            
            let allTasks = [];
            let hasMore = true;
            let p = 0;
            
            while (hasMore) {
              const tasksRes = await callMcp('get_tasks', { list_id: list.id, page: p });
              if (tasksRes.error) break;
              
              if (tasksRes.data && tasksRes.data.tasks && tasksRes.data.tasks.length > 0) {
                  allTasks = allTasks.concat(tasksRes.data.tasks);
                  p++;
                  if (tasksRes.data.tasks.length < 100) hasMore = false; 
              } else {
                  hasMore = false;
              }
            }

            if (allTasks.length === 0) {
                 markdown += `*No tasks found in this list.*\n\n---\n\n`;
                 console.log(`     - 0 tasks found.`);
                 continue;
            }
            
            console.log(`     - Found ${allTasks.length} tasks. Fetching detailed histories...`);

            for (const task of allTasks) {
                 const statusStr = task.status ? task.status.status.toUpperCase() : "N/A";
                 const priorityStr = task.priority ? task.priority.priority : "Normal";
                 const assigneesStr = task.assignees && task.assignees.length > 0 
                      ? task.assignees.map(a => a.username).join(', ') : "Unassigned";

                 markdown += `### [${task.name}](${task.url})\n`;
                 markdown += `- **Status**: \`${statusStr}\`\n`;
                 markdown += `- **Priority**: ${priorityStr}\n`;
                 markdown += `- **Assignees**: ${assigneesStr}\n`;
                 markdown += `- **Created**: ${formatDate(task.date_created)}\n`;
                 markdown += `- **Due Date**: ${formatDate(task.due_date)}\n\n`;

                 if (task.description) {
                     markdown += `#### Description\n`;
                     markdown += `> ${task.description.replace(/\n/g, '\n> ')}\n\n`;
                 }

                 if (task.checklists && task.checklists.length > 0) {
                     markdown += `#### Checklists\n`;
                     for (const cl of task.checklists) {
                         markdown += `**${cl.name}**\n`;
                         if (cl.items) {
                            for (const item of cl.items) {
                                const box = item.resolved ? "[x]" : "[ ]";
                                markdown += `- ${box} ${item.name}\n`;
                            }
                         }
                     }
                     markdown += `\n`;
                 }
                 
                 // Fetch Comments / History
                 const comments = await fetchTaskComments(task.id);
                 if (comments.length > 0) {
                     markdown += `#### Activity & Comments (${comments.length})\n`;
                     // Sort comments oldest to newest
                     comments.sort((a,b) => parseInt(a.date) - parseInt(b.date));
                     
                     for (const c of comments) {
                         const author = c.user ? c.user.username : 'Unknown';
                         const date = formatDate(c.date);
                         let text = c.comment_text || "";
                         if (text) {
                            markdown += `**${author}** *(${date})*:\n`;
                            markdown += `> ${text.replace(/\n/g, '\n> ')}\n\n`;
                         }
                     }
                 } else {
                     markdown += `*No comments or history log entries found for this task.*\n\n`;
                 }
                 
                 markdown += `---\n\n`;
            }
        }
    }
    
    // Write out the file for this space uniquely
    const safeName = space.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const outputPath = path.join(__dirname, `${safeName}_task_history.md`);
    fs.writeFileSync(outputPath, markdown);
    console.log(`✅ Save complete: ${outputPath}`);
}

async function runHistoriesExtraction() {
  console.log("Starting deep history extraction...");
  
  console.log("Fetching spaces dynamically...");
  const spacesRes = await callMcp('get_spaces', { workspace_id: WORKSPACE_ID });
  if (spacesRes.error || !spacesRes.data || !spacesRes.data.spaces) {
      console.log("Failed to fetch spaces:", spacesRes.error);
      return;
  }
  
  // Filter out internal non-client spaces
  const spacesToProcess = spacesRes.data.spaces.filter(s => s.name !== "EA Internal");

  for (const space of spacesToProcess) {
      await processSpaceData(space);
  }
  
  console.log("\n🚀 All extractions completed! Separate Markdown files have been saved.");
}

runHistoriesExtraction();
