const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Functional Recursive way to add numbers
function sumOfNumbers(i, n) {

    if (i > n) {
        return 0;
    }
    return i + sumOfNumbers(i + 1, n)
}
rl.question("Enter n: ", (n) => {
    console.log(sumOfNumbers(1, Number(n)))
    rl.close();
});
