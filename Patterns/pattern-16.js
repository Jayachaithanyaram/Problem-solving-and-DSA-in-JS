/**
 *      A
 *      BB
 *      CCC
 *      DDDD
 *      EEEEE
 */
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function pattern(n) {

    for (let i = 1; i <=n; i++) {
        let res = ""
        for (let j = 1; j <= i; j++) {
            res += String.fromCharCode(64 + i) + " "

        }
        console.log(res)
    }

}
rl.question("Enter rows :", n => {
    pattern(n);
    rl.close();
})
