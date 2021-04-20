import * as core from '@actions/core'
import * as github from '@actions/github'

async function run() {
    const allowedCommitCount = core.getInput('limit', {required: true});
    const commitsInPrCount = github.context.payload.pull_request.commits;
    if (commitsInPrCount <= allowedCommitCount) {
        core.info(`Amount of commits is within the allowed limit`)
    } else {
        core.setFailed(`Amount of commits exceeds the limit. Limit: ${allowedCommitCount} Commits in PR: ${commitsInPrCount}`)
    }
}

run()
