const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printName(i, n) {

    if (i < 1) {
        return;
    }
    printName(i - 1, n);
    console.log(i);
}

rl.question("Enter n: ", (n) => {
    printName(n, Number(n));
    rl.close();
});