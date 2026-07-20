
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function countingDigits(n) {
    if (n === 0) {
        console.log(1);
        return;
    }

    let count = 0;

    while (n > 0) {
        count++;
        n = Math.floor(n / 10);
    }

    console.log(count);
}
rl.question("Enter a number :", n => {
    countingDigits(Number(n));
    rl.close();
})
