const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printName(i, n) {

    if (i > n) {
        return;
    }
    printName(i + 1, n);
    console.log(i);
}

rl.question("Enter n: ", (n) => {
    printName(1, Number(n));
    rl.close();
});