// dangerfile.js
const { schedule } = require("danger");

schedule(async () => {
const { additions = 0, deletions = 0 } = await danger.github.pr
message(`:tada: The PR added ${additions} and removed ${deletions} lines.`)
});
