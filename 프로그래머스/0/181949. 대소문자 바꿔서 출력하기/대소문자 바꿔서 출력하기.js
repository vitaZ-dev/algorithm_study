const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    let str = '';
    line.split('').forEach(item => {
        if (item == item.toUpperCase()) {
            str += item.toLowerCase()
        } else {
            str += item.toUpperCase()
        }
    })
    console.log(str)
})