const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function fizz(a) {
    for (let i = 1; i <= a; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(i)

        }
        // console.log(i)
    }
}
rl.question("Enter the endnumber:", input => {
    fizz(input)
    rl.close()
})