const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const check = Number(line) % 2 ? 'odd' : 'even';
    console.log(`${line} is ${check}`);
});