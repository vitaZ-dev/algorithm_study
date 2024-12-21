const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const check = line % 2 === 0 ? 'even' : 'odd';
    console.log(`${line} is ${check}`);
});