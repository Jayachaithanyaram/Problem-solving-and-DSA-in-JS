const { stdin } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function power(base, exponent) {
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result = result * base;
    }
    return result;
}
// console.log(power(2, 3))
rl.question("enter base:", (base) => {
    rl.question("enter exponent:", (exponent) => {
        console.log(power(Number(base), Number(exponent)))
        rl.close()
    })

})