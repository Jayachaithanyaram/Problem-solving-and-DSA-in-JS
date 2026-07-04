const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Parametarised way

function sumOfNumbers(i, sum) {

    if (i < 1) {
        console.log(sum)
        return 0;
    }
    sumOfNumbers(i - 1, sum + i)
}

rl.question("Enter n: ", (n) => {
    sumOfNumbers(Number(n),0)
    rl.close();
});

// function sumOfNumbers(i, n) {

//     if (i > n) {
//         return 0;
//     }
//     return i + sumOfNumbers(i + 1, n)
// }

// Type 2