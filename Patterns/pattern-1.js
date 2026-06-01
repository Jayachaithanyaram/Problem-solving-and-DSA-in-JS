/*       * * * *
         * * * *
         * * * *
         * * * *      */

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function pattern(a, b) {
    for (let i = 0; i < a; i++) {
        let res = "";
        for (let j = 0; j < b; j++) {
            res += " *";
        }
        console.log(res)
    }
}
rl.question("Enter rows :", a => {
    rl.question("Enter colums :", b => {
        pattern(a, b);
        rl.close();
    })
})
