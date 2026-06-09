/**
 *      A B C D E
 *      A B C D
 *      A B C
 *      A B
 *      A
 */
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function pattern(n) {

    for (let i = n; i > 0; i--) {
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
