/**
 * Sample Output:
 *     1
 *     01
 *     101
 *     0101
 *     10101
 */

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function pattern(n) {

    for (let i = 1; i <=n; i++) {
        let res = ""
        let start = (i % 2 === 0) ? 0 : 1;
        for (let j = 1; j <= i; j++) {
            res += start
            start = 1 - start
        } 
        console.log(res)
    }
}
rl.question("Enter rows :", n => {
    pattern(parseInt(n, 10));
    rl.close();
})
