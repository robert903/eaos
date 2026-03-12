---
name: Google Workspace CLI (gws) Automation
description: Documentation on operating the `gws` command-line tool for reading and managing Gmail data within the local execution environment.
---

# Google Workspace CLI (`gws`) Integration

This skill outlines how the agent should utilize the `gws` (Google Workspace CLI) tool to perform email operations on behalf of the user, bypassing complex OAuth configurations in Python by leveraging the system's authenticated CLI binary.

## Core Configuration & Context

- **Binary Location:** Assumed to be available in the system PATH (`gws`).
- **Dependencies:** Relies on the user having already authenticated via `gcloud` and `gws auth`. DO NOT attempt to run auth flows unless explicitly instructed, as they require browser interaction.
- **Execution:** Always use the `run_command` tool to execute these scripts.

## Supported Operations & Workflows

### 1. Fetching Recent Emails
To retrieve the user's latest emails (for summarization or review), use the `gws message list` command.

**Command:**
```bash
gws message list --max-results 10 --format minimal
```
*Note: Depending on the specific `gws` version features, you may need to pipe this to `jq` or parse the raw output.*

### 2. Reading Specific Emails
Once a message ID is obtained from the list, fetch its full contents.

**Command:**
```bash
gws message get [MESSAGE_ID] --format full
```

### 3. Formatting Outputs for the User
When the user asks to "Create an email markdown file" or "Fetch my last 10 emails," do not just dump the terminal output. You must:
1. Run the `gws message list` command.
2. Parse the subject lines, senders, and dates.
3. Use the `write_to_file` tool to generate a cleanly formatted Markdown artifact (e.g., `emails.md`).

## Error Handling & Self-Annealing

If a `gws` command fails:
1. **Check Auth:** If the error indicates missing credentials, stop and notify the user: *"Your `gws` authentication appears to have expired. Please run `gws auth` in your terminal."*
2. **Command Syntax:** If the error is a flag mismatch, run `gws --help` or `gws message --help` to self-correct the syntax before trying again. Do not guess flags.

## Integration with Layer 3 Architecture
If a broader directive requires sending an email based on synthesized data, use `gws` to draft or send the message directly from the shell, pushing the deterministic execution to the CLI rather than trying to build an SMTP client.
