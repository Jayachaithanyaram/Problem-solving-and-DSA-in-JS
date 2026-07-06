const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
rl.question("enter a number :", (n) => {
    console.log(factorial(Number(n)));
    rl.close()
})