/**
 *      A
 *      A B
 *      A B C
 *      A B C D
 *      A B C D E
 */
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function pattern(n) {

    for (let i = 0; i <= n; i++) {
        let res = ""
        for (let j = 1; j <= i; j++) {
            res += String.fromCharCode(64 + j) + " "

        }
        console.log(res)
    }

}
rl.question("Enter rows :", n => {
    pattern(n);
    rl.close();
})
