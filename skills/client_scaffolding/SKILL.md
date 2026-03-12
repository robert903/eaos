---
name: Automated Client Scaffolding (ClickUp SOP)
description: A rigid, deterministic workflow for onboarding a new client into ClickUp, establishing their structural boundaries based on synthesized best practices.
---

# Client ClickUp Scaffolding Framework

This skill operationalizes the insights gathered during the synthesis of `client_dossiers.md` and `onboarding_sops.md`. When instructed to "Scaffold ClickUp for [Client Name]" or "Apply the onboarding SOP to [Client Name]", the agent MUST follow this exact API workflow.

## The Scaffolding Procedure

### 1. Create the Container Boundary
Every distinct client must be isolated into their own dedicated Space within the Workspace. 

**Action:**
If a space does not already exist, create one (if API supports it, though currently Spaces are often created manually by admins). 
- Verify access to the client's Space using the `mcp_clickup_get_spaces` tool.

### 2. Inject the Client Dossier
Because ClickUp Spaces (like Folders) do not support a native `description` field via the API, the dossier cannot be attached to the space root directly. 

**Action (Manual Fallback via Automation):**
Until Docs are supported via the API at the Space level:
1. Create the primary operational List (e.g., "General", "Onboarding", or "Campaign Execution") inside the Space using the `mcp_clickup_create_list` tool (`container_type: space`).
2. Run a specific `curl` command (using the `run_command` tool) to inject the text of the `client_dossiers.md` directly into that Top List's description.

*Command Template:*
```bash
curl -i -X PUT \
  'https://api.clickup.com/api/v2/list/[NEW_LIST_ID]' \
  -H 'Authorization: pk_81504514_F5O5ZPW9NSYRQEFLG18LZXGN2MUGYE79' \
  -H 'Content-Type: application/json' \
  -d '{
    "content": "[ESCAPED_DOSSIER_TEXT]"
  }'
```

### 3. Generate Service-Specific Lists
Based on the defined scope of work, scaffold the specific tactical lists within the new Space using `mcp_clickup_create_list` (`container_type: space`, `container_id: space_id`):
- **For Fractional Growth Clients:** Create lists for "Technical Setup & Integrations", "Weekly Coaching & Sprints", and "Ads Management".
- **For SEO Clients:** Create lists for "Technical Remediation Sprints" and "Content Pipeline".
- **For Ad Clients:** Create lists for "Campaign Iterations" and "Landing Page CRO".

### Operating Principles
- Isolation is key. Never place a client's tasks in a generic catch-all space. They must live within their dedicated Space.
- The dossier (or a summary of the scope) MUST be pinned as a description somewhere visible immediately upon entering the space, so all operational team members know the boundaries of the engagement.
