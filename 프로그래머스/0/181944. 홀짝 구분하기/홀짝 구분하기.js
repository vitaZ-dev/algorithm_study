const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    if (line % 2) console.log(`${line} is odd`);
    else console.log(`${line} is even`);
});