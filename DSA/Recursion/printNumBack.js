const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printName(i, n) {

    if (i > n) {
        return;
    }

    console.log(n);


    printName(i, n - 1);
}

rl.question("Enter n: ", (n) => {
    printName(1, Number(n));
    rl.close();
});