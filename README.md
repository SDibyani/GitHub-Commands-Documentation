# GitHub-Commands-Documentation

# INDEX

## Introduction
## Basic Git Commands
## Branching
## Remote Repository
## Git pull
## Undo commands



## Introduction
  GitHub is an online platform to manage codes and to collaborate with others for building software projects.

## Basic Git Commands

1. git init -> It initializes a new git repository in the current folder.
2. git clone <repo_url> -> It copies a repository from GitHub to the local system.
3. git status -> It shows the current status of files in the working directory.
          This includes A. Current branch
                        B. Staged files -> files selected for the next commit
                        C. Modified files -> files that have been changed after the last commit but not yet staged
                        D. Untracked files -> files that exist in the project folder but git is not tracking it yet ; Means                                                 new files not added to Git.
4. git add . -> It takes all the files added to be saved in the repo
5. git commit -m "commit message" ->  It saves all the changes with a commit message
6. git push origin main  -> It uploads all the local commits to the remote repository


## Branching 
   It means creating a separate line of development from the main project so that changes can be done without affecting the      main code.

1. git branch -> It shows all local branches and the current branch is marked with * .
2. git branch branch-name -> It creates a new branch
3. git checkout branch-name -> It switches into another branch
4. git checkout -b branch-name -> It is used to create a new branch and switch to that branch
5. git branch -d branch-name -> It is used to delete a branch
6. git push origin branch-name -> It push the branch to GitHub
7. git push origin --delete branch-name -> It is used to delete a remote branch


## Remote Repository 
   It is a Git repository stored on the internet or a server not in the local computer.

1. git remote -> It is used to see the names of remote repositories connected to the project.
2. git remote add origin <repo-url> -> It is used to connect the local project to GitHub.
3. git remote remove origin -> It is used to disconnect a remote repository.
4. git remote show origin  -> It is used to see detailed info about a remote repository.


## Git pull 
  It means getting the latest code from the remote repository  and updating the local project.

1. git pull -> It pulls  changes from the default remote branch into your current branch.
2. git pull origin main -> It pulls code  from the main branch on GitHub.
3. git pull origin branch-name -> It pulls updates from a specific branch.


## UNDO Commands 
  These commands are used to reverse mistakes before or after committing code.

1.git checkout -- file-name -> It is used to discard changes and restore last committed code.
2.git restore --staged file-name -> It removes file from staging area but keeps the changes .
3. git reset -> It is used to undo changes by moving the project back to the previous state.








