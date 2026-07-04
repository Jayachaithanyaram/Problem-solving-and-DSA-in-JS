const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function backNumLinearly(i, n) {

    if (i > n) {
        return;
    }
    backNumLinearly(i + 1, n);
    console.log(i);
}

rl.question("Enter n: ", (n) => {
    backNumLinearly(1, Number(n));
    rl.close();
});