const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printNum(i, n) {

    if (i > n) {
        return;
    }

    console.log(i);


    printNum(i + 1, n);
}

rl.question("Enter n: ", (n) => {
    printNum(1, Number(n));
    rl.close();
});