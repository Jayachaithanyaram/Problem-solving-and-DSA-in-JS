/*
         *
        ***
       *****
      *******
     *********
     *********
      *******
       *****
        ***
         *
*/

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function pattern(n) {
    for (let i = 0; i < n; i++) {
        let res = "";
        for (let j = 0; j < n - i - 1; j++) {
            res += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            res += "*"
        }
        for (let j = 0; j < n - i - 1; j++) {
            res += " ";
        }
        console.log(res)
    }
    for (let i = 0; i < n; i++) {
        let res = "";
        for (let j = 0; j < i; j++) {
            res += " ";
        }
        for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
            res += "*"
        }
        for (let j = 0; j < i; j++) {
            res += " ";
        }
        console.log(res)
    }
}
rl.question("Enter rows :", n => {
    pattern(n);
    rl.close();
})
