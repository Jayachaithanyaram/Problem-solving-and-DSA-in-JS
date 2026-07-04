    const { stdin } = require('process');
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

function multable(a, b) {
    for (let i = 1; i <= b; i++) {
        console.log(`${a} * ${i} = ${a * i}`);
    }
}

rl.question("enter num for table: ", num => {
    rl.question("enter num till : ", limit => {
        multable(Number(num), Number(limit))

        rl.close();
    })
})