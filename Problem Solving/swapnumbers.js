const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function swap(a, b) {
    // with 3rd variable
    // let c = b;
    // b = a;
    // a = c;
    // without 3rd variable
    a = a + b
    b = a - b
    a = a - b
    return { a, b }
}
rl.question("enter 'a' value:", a => {
    rl.question("enter 'b' value:", b => {
        console.log(swap(Number(a), Number(b)));
        rl.close()
    })
})