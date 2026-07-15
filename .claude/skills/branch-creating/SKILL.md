---
name: crew-branch-naming
description: Creates git branches for the CREW project. Use when the user asks to create a branch, start work on a task/ticket, or gives a task number and description for CREW.
---

When creating a branch for CREW:

1. Determine the branch type:
   - If the user explicitly states the type (bug / feature), use it.
   - If not stated, infer it from the task description: fixing, broken, error, crash, incorrect behavior → `bug`; new functionality, adding, implementing → `feature`.

2. Extract the task number from the user's prompt (the number after "CR" or given as a task/ticket number) if number not exists in the prompt use 0 like CR-0.

3. Build a slug from the task description:
   - English only (transliterate or translate if the description is in another language — never output Cyrillic).
   - Lowercase, words separated by hyphens.
   - Maximum 6 words.
   - Keep only the words needed to identify the task; drop filler words (a, the, please, need to, etc.).

4. Assemble the branch name in this exact format:
   `[type]/CR-[number]-[slug]`

   Example: `feature/CR-1-add-staff-portfolio`

5. Always branch from `main`:

   ```
   git checkout main
   git pull origin main
   git checkout -b <branch-name>
   ```

6. Show the user the resulting branch name before or as you run the commands.dth
