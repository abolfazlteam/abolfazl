# Git PR Workflow Guide

This repo currently pushes to the old production repository:

```bash
git@github.com:abolfazlteam/abolfazl.git
```

The old repo has a protected `main` branch, so changes must go through a pull request.

## The Important Rule

Do not open PRs from `redesign-deploy` into `main`.

`redesign-deploy` was created from the redesign repo history, so GitHub may show:

```text
There isn't anything to compare.
main and redesign-deploy are entirely different commit histories.
```

For PRs into `main`, create a branch that starts from `origin/main`.

## Check Your Current Setup

Run:

```bash
git remote -v
git status --short --branch
git branch -vv
```

Expected remote:

```text
origin  git@github.com:abolfazlteam/abolfazl.git
```

If the remote is wrong:

```bash
git remote set-url origin git@github.com:abolfazlteam/abolfazl.git
```

## Safe Way To Create A PR Branch

From the main working copy:

```bash
git fetch origin
git worktree add -b my-change-pr ../abolfazl-my-change-pr origin/main
cd ../abolfazl-my-change-pr
```

Now apply your changes in this PR worktree.

If the changes already exist in the redesign checkout, copy only what you need. Example:

```bash
cp ../abolfazl-redesign/Dockerfile ./Dockerfile
cp ../abolfazl-redesign/.env.example ./.env.example
```

For a full replacement, be careful to preserve files you still want. A broad copy can remove workflows or config files, so review with `git status` before committing.

## Commit And Push The PR Branch

Inside the PR worktree:

```bash
git status --short --branch
npm run lint
npm run build
git add -A
git commit -m "describe the change"
git push -u origin HEAD:refs/heads/my-change-pr
```

Then open:

```text
https://github.com/abolfazlteam/abolfazl/pull/new/my-change-pr
```

The PR should compare:

```text
my-change-pr -> main
```

## Updating An Existing PR

Go to that PR worktree:

```bash
cd ../abolfazl-my-change-pr
```

Make changes, then:

```bash
npm run lint
npm run build
git add -A
git commit -m "update the PR"
git push
```

## What Not To Do

Do not run this from the redesign-history branch:

```bash
git pull origin main
```

That mixes unrelated histories and can cause conflicts like:

```text
CONFLICT (add/add)
fatal: Need to specify how to reconcile divergent branches.
```

Do not force-push to `main`:

```bash
git push origin HEAD:main --force-with-lease
```

The old repo protects `main`, and GitHub will reject it.

## If You Accidentally Started A Bad Pull/Rebase

If Git says you are in a rebase and files need merge:

```bash
git status --short --branch
git rebase --abort
```

If you stashed work before the bad pull:

```bash
git stash list
git stash apply stash@{0}
```

Only drop the stash after you confirm your files are back:

```bash
git stash drop stash@{0}
```

## Worktree Cleanup

List worktrees:

```bash
git worktree list
```

Remove an old PR worktree after the PR is merged:

```bash
git worktree remove ../abolfazl-my-change-pr
git branch -d my-change-pr
```

If the branch was already merged on GitHub but local Git refuses deletion, inspect first:

```bash
git branch --merged
```

Then delete only when you are sure:

```bash
git branch -D my-change-pr
```
