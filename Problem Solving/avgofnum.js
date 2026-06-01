const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function average(a) {

    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    let result = sum / a.length;
    return result;
}

rl.question("Enter numbers: ", (input) => {

    let arr = input.split(" ").map(Number);

    console.log("Average:", average(arr));

    rl.close();
});