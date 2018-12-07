# NPM & GIT Cheat Sheet

## NPM Commands
- `npm init -y`: create a new `package.json` file and autofill the basic config properties that it creates
- `npm i`: install all packages that are listed in the `dependencies` block of your `package.json` file
  - **note**: this is often done after cloning a NodeJS application in order to get all of the required dependencies
- `npm i some-package`: install a package as a dependency of your application
- `npm i some-package another-package`: install multiple packages as dependencies of your application
- `npm uninstall some-package`: uninstalls a package and removes it from your `package.json` file
- `npm -v`: get the current version of npm
- `npm help <command>`: get a description of what the command is and how to use it

## GIT Commands
- `git init`: create a `.git` directory and initialize local git tracking
- `git remote add origin some-url.git`: add a link to your original remote repository
- `git remote remove origin some-url.git`: remove the remote repository link
- `git remote add upstream some-url.git`: add an additional link to the base (upstream repository)
- `git pull origin branch_name`: pull changes from your repo into your local machine
- `git pull remote branch_name`: pull changes from the base (upstream repository)
- `git add filename`: stage your changes for commit (filename can be replaced with `.`, `/foldername`, etc)
- `git commit -m "some msg"`: commit your changes locally
- `git push origin branch_name`: push your changes to your remote repository
- `git status`: check the status of local git tracking on your project
- `git log`: review a log of all commits
- `git checkout branch_name`: checkout a branch that already exists locally
- `git checkout -b branch_name`: create a new branch locally
- `git merge branch_name`: **DANGER** - this voids out the PR process and manually merges a branch into another