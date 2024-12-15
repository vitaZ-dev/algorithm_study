const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [...line];
}).on('close',function(){
    const rgx = /[A-Z]/;
    str = input.map(s => rgx.test(s) ? s.toLowerCase() : s.toUpperCase()).join('');
    console.log(str)
});