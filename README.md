# PR commit limit

A GitHub action that checks and limits the allowed commits in a PR.

## Building

The `dist` directory need to be pushed to GitHub for the action to work.

To build the dist code run `npm run prepare`

## Configuration

This step needs to be added in the repo's action workflow

```yml
steps:
  - uses: 'PressPage/pr-commit-limit@main'
    with:
      limit: '1'
```
