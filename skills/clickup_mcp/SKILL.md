---
name: ClickUp MCP Interaction
description: Comprehensive details on how to interact with the ClickUp MCP server via Node.js scripts or directly through the CLI, covering authentication mapping, pagination, list extraction, and detailed task histories via comments.
---

# ClickUp MCP Integration Guide

This skill details how to interact with ClickUp data using the `clickup-mcp-server` via the Model Context Protocol (MCP) spec. This covers configuration, testing auth scope, and script designs for data extraction.

## Global Context
The ClickUp MCP server requires an OAuth App token or Personal token passed as an environment variable to initialize. The actual API scope and permissions belong exactly to that user.
- **Repository:** `https://github.com/nsxdavid/clickup-mcp-server`
- **Execution Engine:** `npx -y clickup-mcp-server` (No cloning required)
- **Authentication Env Var:** `CLICKUP_API_TOKEN`

## 1. Environment & MCP Configuration (`mcp_config.json`)

To have an MCP client launch and communicate with ClickUp automatically, add this node to the host's config:

```json
"clickup": {
  "command": "npx",
  "args": [
    "-y",
    "clickup-mcp-server"
  ],
  "env": {
    "CLICKUP_API_TOKEN": "YOUR_ACTUAL_TOKEN"
  },
  "disabled": false
}
```

## 2. Authentication Coverage Gotcha
Just because a user possesses a token doesn't mean they can query all "Spaces" in a ClickUp Workspace. Some spaces might be `private`.
- If an agent tries to query a private space unassigned to the token owner, the MCP will return a list error: `ClickUp API Error (401): Team(s) not authorized` or `Oauth token not found`.

**How to find valid spaces without guessing:**
Use the `get_spaces` tool passing the Workspace ID. This returns the definitive, true list of valid/viewable space IDs for the token. Do not assume all known space IDs are accessible.

## 3. Tool Usage via Node.js (`child_process.spawn`)
Directly piping JSON-RPC input via `spawn` allows Node scripts to drive the MCP manually for mass text/data extraction tasks.

### Core Architecture
MCP over `stdio` communicates synchronously but requires the agent to await initialization. Send an exact JSON sequence.

```javascript
const { spawn } = require('child_process');

function callMcp(toolName, argsObj) {
  return new Promise((resolve) => {
    const child = spawn('npx', ['-y', 'clickup-mcp-server'], {
      env: { ...process.env, process: undefined, CLICKUP_API_TOKEN: process.env.TOKEN }
    });

    let output = '';
    let resolved = false;

    child.stdout.on('data', (data) => {
      output += data.toString();
      const lines = output.split('\n');
      for (const line of lines) {
        // ID 2 is our actual tool call response we sent
        if (line.includes('"id":2') || line.includes('"id": 2')) {
           try {
             const resp = JSON.parse(line);
             if (!resolved) {
                 resolved = true;
                 child.kill(); // MUST kill process to prevent hang
                 
                 if (resp.result?.isError) {
                     resolve({ error: resp.result.content[0].text });
                 } else {
                     try {
                         resolve({ data: JSON.parse(resp.result.content[0].text) });
                     } catch(err) {
                         resolve({ error: "Parse error" });
                     }
                 }
             }
           } catch (e) { /* wait for valid JSON block */ }
        }
      }
    });

    const initPayload = JSON.stringify({
      jsonrpc: "2.0", id: 1, method: "initialize",
      params: { protocolVersion: "2024-11-05", capabilities: {}, clientInfo: { name: "test", version: "1" } }
    });

    const callPayload = JSON.stringify({
      jsonrpc: "2.0", id: 2, method: "tools/call",
      params: { name: toolName, arguments: argsObj }
    });

    child.stdin.write(initPayload + '\n');
    setTimeout(() => { child.stdin.write(callPayload + '\n'); }, 300); // Wait for MCP to ack init
  });
}
```

## 4. Key Data Models & Behaviors

### A. Extracting Lists
Tools: `get_lists`. 
Arguments: `container_type: "folder" | "space"`, `container_id: "ID"`.
*   Note: It's easiest to iterate through Folder IDs to pull Folder Lists, then call `space` to get Lists not attached to a folder.

### B. Extracting Tasks and Handling Pagination
Tools: `get_tasks`
Arguments: `list_id: "ID"`, `page: INT`.
*   **Pagination:** ClickUp's responses are capped at 100 items per page. You must manually loop incrementing `page` until the returned `tasks` array length is `< 100` or `0`.
*   **Payload:** Includes nested data for Checklists, priority, status, assignees, and a `description`.

### C. Extracting Task History/Comments
To get the actual "Deep History" (discussions, updates) on a task, you cannot rely entirely on `get_tasks`. 
Tools: `get_task_comments`
Arguments: `task_id`.
*   This returns an array of comments / history activities with `date` (unix timestamp string), `comment_text`, and author info (`user.username`).
*   Sort them chronologically when appending to reports: `comments.sort((a,b) => parseInt(a.date) - parseInt(b.date));`.

## Checklists Output
Don't forget nested checklist parsing from `get_tasks`. A task can have multiple checklists, and each item has a `resolved` boolean.

```javascript
if (task.checklists) {
   for (const cl of task.checklists) {
       for (const item of cl.items) {
           const box = item.resolved ? "[x]" : "[ ]";
           console.log(`${box} ${item.name}`);
       }
   }
}
```
