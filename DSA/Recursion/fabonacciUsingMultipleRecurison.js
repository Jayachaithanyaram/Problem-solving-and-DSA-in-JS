const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fabonacciSeries(n) {
    if (n <= 1) {
        return n;
    }
    let last = fabonacciSeries(n - 1);
    let slast = fabonacciSeries(n - 2);

    return last + slast;
}

rl.question("Enter n: ", (n) => {
    console.log(fabonacciSeries(Number(n)))
    rl.close();
});