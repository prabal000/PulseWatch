# Conventions

## Commits (Conventional Commits)
`type: short imperative description`
Types: feat, fix, docs, test, refactor, chore, ci, perf
Examples: `feat: add scheduled monitor worker`, `fix: prevent duplicate incident creation`

## Branching
`main` is always working. Work on `feat/<name>` branches and merge via PR (from Day 7, with CI).

## Code
- TypeScript strict mode; no `any` without a comment explaining why.
- No secrets in code. Config comes from environment variables.
- One module = one responsibility. No giant files.
- Anything prototype-grade is labeled `// PROTOTYPE:` with the reason.