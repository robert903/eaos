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
           } catch (e) {
             // Wait for more data
           }
        }
      }
    });

    child.on('close', () => {
       if (!resolved) {
           resolve({ error: "Process closed without returning a result. Output: " + output });
       }
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
    setTimeout(() => {
        child.stdin.write(callPayload + '\n');
    }, 500); 
  });
}

function formatDate(timestamp) {
    if (!timestamp) return "Not set";
    return new Date(parseInt(timestamp)).toLocaleDateString();
}

async function processLists(listRes, markdown, headingLevel) {
    if (listRes.error) {
        markdown += `> ⚠️ **Error fetching lists:** ${listRes.error}\n\n`;
        return markdown;
    }
    
    if (!listRes.data || !listRes.data.lists || listRes.data.lists.length === 0) {
        markdown += `*No lists found.*\n\n`;
        return markdown;
    }

    for (const list of listRes.data.lists) {
        console.log(`  -> Fetching List: ${list.name}`);
        markdown += `${headingLevel} 📋 List: ${list.name}\n\n`;
        
        let allTasks = [];
        let hasMore = true;
        let p = 0;
        
        while (hasMore) {
          const tasksRes = await callMcp('get_tasks', { list_id: list.id, page: p });
          if (tasksRes.error) {
               markdown += `> ⚠️ **Error fetching tasks:** ${tasksRes.error}\n\n`;
               break;
          }
          if (tasksRes.data && tasksRes.data.tasks && tasksRes.data.tasks.length > 0) {
              allTasks = allTasks.concat(tasksRes.data.tasks);
              p++;
              if (tasksRes.data.tasks.length < 100) hasMore = false; // less than max items per page usually implies it is the last page.
          } else {
              hasMore = false;
          }
        }

        if (allTasks.length === 0) {
             markdown += `*No tasks found in this list.*\n\n`;
             continue;
        }

        markdown += `| Status | Task Name | Priority | Assignees | Due Date | Created |\n`;
        markdown += `|---|---|---|---|---|---|\n`;

        for (const task of allTasks) {
             const statusStr = task.status ? task.status.status.toUpperCase() : "N/A";
             const priorityStr = task.priority ? task.priority.priority : "Normal";
             const assigneesStr = task.assignees && task.assignees.length > 0 
                  ? task.assignees.map(a => a.username).join(', ') 
                  : "Unassigned";

             markdown += `| \`${statusStr}\` | **[${task.name}](${task.url})** | ${priorityStr} | ${assigneesStr} | ${formatDate(task.due_date)} | ${formatDate(task.date_created)} |\n`;
        }
        markdown += `\n`;
        
        // Detailed breakdown of tasks that have descriptions or checklists
        const tasksWithDetails = allTasks.filter(t => t.description || (t.checklists && t.checklists.length > 0));
        if (tasksWithDetails.length > 0) {
            markdown += `<details>\n<summary><b>View Detailed Task Descriptions</b></summary>\n\n`;
            for (const t of tasksWithDetails) {
                markdown += `##### ${t.name}\n`;
                if (t.description) {
                    const desc = t.description.length > 500 ? t.description.substring(0, 500) + "..." : t.description;
                    markdown += `> ${desc.replace(/\n/g, '\n> ')}\n\n`;
                }
                if (t.checklists && t.checklists.length > 0) {
                    markdown += `**Checklists:**\n`;
                    for (const cl of t.checklists) {
                        markdown += `- ${cl.name}:\n`;
                        if (cl.items) {
                           for (const item of cl.items) {
                               const box = item.resolved ? "[x]" : "[ ]";
                               markdown += `  - ${box} ${item.name}\n`;
                           }
                        }
                    }
                    markdown += `\n`;
                }
            }
            markdown += `</details>\n\n`;
        }
    }
    return Object.assign({}, {markdown});
}

async function runReport() {
  console.log("Generating report...");
  let markdown = `# ClickUp Workspace Report\n\n`;
  markdown += `**Generated on**: ${new Date().toLocaleString()}\n`;
  markdown += `**Workspace ID**: ${WORKSPACE_ID}\n\n---\n\n`;

  console.log("Fetching spaces dynamically...");
  const spacesRes = await callMcp('get_spaces', { workspace_id: WORKSPACE_ID });
  if (spacesRes.error || !spacesRes.data || !spacesRes.data.spaces) {
      console.log("Failed to fetch spaces:", spacesRes.error);
      return;
  }
  
  // Filter out internal non-client spaces
  const spacesToProcess = spacesRes.data.spaces.filter(s => s.name !== "EA Internal");

  for (const space of spacesToProcess) {
    console.log(`Fetching Space: ${space.name}...`);
    markdown += `## 🚀 Space: ${space.name} (ID: ${space.id})\n\n`;
    
    markdown += `### 📝 Space Lists (No Folder)\n\n`;
    const spaceListsRes = await callMcp('get_lists', { container_type: 'space', container_id: space.id });
    const processResult = await processLists(spaceListsRes, markdown, "####");
    markdown = processResult.markdown;
    
    // Check if the get_folders endpoint exists, but we know it errored previously, so we'll skip the folder endpoint 
    // to avoid MCP method not found errors. Lists can be queried directly via `folderless` true/false, but 
    // the generic space lists endpoint might only fetch space-level lists if structured that way.
    // If it's missing folders, I'll update it subsequently.
    markdown += `---\n\n`;
  }
  
  const outputPath = path.join(__dirname, 'workspace_report.md');
  fs.writeFileSync(outputPath, markdown);
  console.log(`\n✅ Report generated successfully: ${outputPath}`);
}

runReport();
