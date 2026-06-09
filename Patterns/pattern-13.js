/**
 * Sample Output:
 *      1
 *      2 3
 *      4 5 6
 *      7 8 9 10
 *      11 12 13 14 15
 */

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function pattern(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        let res = ""
        for (let j = 1; j <= i; j++) {
            res += num + " "
            num += 1
        }
        console.log(res)
    }

}
rl.question("Enter rows :", n => {
    pattern(n);
    rl.close();
})
