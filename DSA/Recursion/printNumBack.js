const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printNumBack(i, n) {

    if (i > n) {
        return;
    }

    console.log(n);


    printNumBack(i, n - 1);
}

rl.question("Enter n: ", (n) => {
    printNumBack(1, Number(n));
    rl.close();
});