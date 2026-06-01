const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function temp(a) {
    let fahenheit = (a * 1.8) + 32;
    return fahenheit;
}
rl.question("Enter celcius:", input => {
    console.log("The value in fahrenheit is :", temp(Number(input)))
    rl.close();
})