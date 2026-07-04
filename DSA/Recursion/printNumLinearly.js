const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printNumLinearly(i, n) {

    if (i < 1) {
        return;
    }
    printNumLinearly(i - 1, n);
    console.log(i);
}

rl.question("Enter n: ", (n) => {
    printNumLinearly(n, Number(n));
    rl.close();
});