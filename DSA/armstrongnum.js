
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function armstrongnum(n) {
    let dup = n
    let sum = 0
    while (n > 0) {
        let lastdigit = n % 10;
        sum = sum + (lastdigit * lastdigit * lastdigit)
        n = Math.floor(n / 10)
    }
    return dup == sum;
}
rl.question("Enter a number :", n => {
    console.log(armstrongnum(Number(n)))
    rl.close();
})
