const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prime(num) {

    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

rl.question("Enter a number: ", input => {

    console.log("Prime:", prime(Number(input)));

    rl.close();

});