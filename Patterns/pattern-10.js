/*
         *
         **
         ***
         ****
         *****
         ****
         ***
         **
         *
*/

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function pattern(n) {
    for (let i = 1; i < 2 * n - 1; i++) {
        let res = "";
        let stars = i;
        if (i > n) stars = 2 * n - i;
        for (let j = 1; j <= stars; j++) {
            res += "*";
        }
        console.log(res)
    }
}
rl.question("Enter rows :", n => {
    pattern(n);
    rl.close();
})
