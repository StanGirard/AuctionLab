# AuctionLab

## Git Flow

### Create and initialize a repository

These commands will create a new git repository and create the default branches used by gitflow.

```
$ git init gitflow-tutorial
$ cd gitflow-tutorial/
$ git flow init -d
```

### Develop a feature

These steps will create a feature branch, introduce a feature, merge it back to the develop branch, and finally delete the feature branch.

#### Make a feature branch
```
$ git flow feature start awesome-thing
# Switched to a new branch ‘feature/awesome-thing’
```

#### Commit a change
```
$ touch file1.txt
$ git add .
$ git commit -m ‘Implemented an awesome thing.’
```
#### Merge commits from develop and upstream

This step can be safely skipped in our tutorial, but is quite important when working on multiple features or with a remote repository. You should use rebase on the feature branch to amend your commits instead of merging. This allows you to keep the graph simple and assures that your commits will remain atomic instead of introducing changes into a merge commit, which could make it more difficult to understand, cherry-pick, or revert later. You should only rebase temporary branches such as feature branches if you wish to otherwise preserve branch history.

```
$ git rebase develop
# Manage conflicts by updating your commits if needed.
```

#### Merge the feature

You have already handled merge conflicts by rebasing, so when you finish the feature there should be no further conflicts.
```
$ git flow feature finish awesome-thing
# The feature is merged into develop.
# Switched to branch ‘develop’
```

### Create a release

These steps will create a release branch from the develop branch, update the version, merge it all to the master branch, create a tag, merge back to the develop branch, and finally delete the release branch. Code pushed to the master branch should be considered ready for release. If you are developing a web or enterprise mobile application, you might configure external tools such as Heroku to automatically deploy your application when it is pushed.

#### Start the release

```
$ git flow release start v1.0
# Switched to branch ‘release/v1.0’
```

#### Perform release specific changes

You may need to update environment configurations, plists, or to perform other changes to support a release. Any changes you make in this branch will be merged into both the develop and master branches after completion, and a release tag will be created upon master.

```
$ echo ‘v1.0’ > version.txt
$ git add .
$ git commit -m ‘Added version file and set initial v1.0 version.’
```

#### Complete the release

```
$ git flow release finish -m ‘v1.0’ v1.0
# The release is merged into master and develop.
# Switched to branch ‘develop’.
``` 

### Hotfix the release

Hotfixing should be done to fix issues with a release. The process is almost identical to the release process although the hotfix branch is created from the master branch to reflect a change to the last release.

```
$ git flow hotfix start v1.0.1
# Switched to branch ‘hotfix/v1.0.1’.
$ echo ‘v1.0.1’ > version.txt
$ git add .
$ git commit -m ‘Updated version file to v1.0.1.’
$ git flow hotfix finish -m ‘v1.0.1’ v1.0.1
```