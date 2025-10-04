# Working with Git

The app allows you to perform a few separate git-related operations, these are documented below.

## Push to remote

This is equivalent to `git push --all origin`. It pushes all the branches in the local repository to your specified remote.

## Pull from remote

Equivalent to `git pull --rebase origin`, pulls from the origin remote and rebases any local changes that are not upstream.

## Synchronize repository

Equivalent to running `git pull --rebase origin && git push --all origin`. This does a 'Pull from remote', commits if there are any changes, then does 'Push to remote' — all in one go.

## Hard reset to remote branch

Equivalent to `git fetch origin --all && git reset --hard origin/master`. Discards all local changes and resets the repository to the remote state. Useful for when your local repo has entered a bad state but you have no local changes that need to synced.

## Abort rebase and push new changes
If the repository is in a rebasing state, this will create a new branch from your current state and push it to your remote repository so you can resolve the conflicts and update the `main` branch which the app will then pull.
