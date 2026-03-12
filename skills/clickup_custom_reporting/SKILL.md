---
name: ClickUp Custom Reporting (Node.js Execution)
description: Guidelines on executing the custom deterministic Node.js scripts (Layer 3) for deep ClickUp reporting rather than relying solely on the MCP tools.
---

# ClickUp Custom Reporting (Layer 3 Execution)

While the base `clickup-mcp-server` integration handles generic tool queries, this skill defines the workflow for executing the massive, workspace-wide custom reporting scripts available in the execution folder. 

This adheres to the Agent Architecture rule: **Push complexity into deterministic code.**

## The Custom Scripts

### 1. The Workspace Snapshot Generator (`generate_report.js`)
This script recursively parses all folders, lists, and paginated tasks across defined Space IDs to generate a massive, Markdown-formatted snapshot of the workspace topology.

**Execution:**
Instead of trying to query every list manually via MCP `get_lists` and `get_tasks` (which hits token limits and pagination ceilings), run the script directly:
```bash
node 'generate_report.js'
```
*Note: Make sure your `Cwd` string properly escapes or quotes spaces in directory names, e.g., `/Users/robertrichards/Desktop/WORK\ AI/CLICKUP\ MCP/`*

**Output:**
The script writes directly to `workspace_report.md` in the current working directory. You can then use the `view_file` tool to read and summarize this file for the user.

### 2. The Historiography Engine (`generate_histories.js`)
This script isolates specific tasks and compiles a chronological history of all comments and status changes, outputting a detailed audit log.

**When to Use:**
If a user asks "What happened with the SEO Audit task?" or "Summarize the history of X," do not attempt to piece it together via raw MCP `get_task_comments` loops. Run the deterministic script.

## Modifying the Scripts
If the user requests a modification (e.g., "Add custom fields to the report"), follow the self-annealing loop:
1. Use `multi_replace_file_content` or `replace_file_content` to surgically update the `.js` file logic.
2. Run the script via `run_command` to test for execution errors.
3. If it breaks, parse the stack trace, fix the Node.js code, and re-run.

## Operating Principles
- Do not attempt to replicate massive nested loops (like parsing 5 spaces -> 20 folders -> 50 lists -> 200 tasks) using LLM tool calls. That is a deterministic task. Always delegate mass extraction to the Layer 3 Node.js scripts.
