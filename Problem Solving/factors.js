const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function factor(a) {
    if (a < 0) {
        throw new Error("enter a positive number")
    }
    let result = []
    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            result.push(i);

        }
    }
    return result;
}
rl.question("enter a number:", (num) => {
    console.log(factor(Number(num)));
    rl.close();
})