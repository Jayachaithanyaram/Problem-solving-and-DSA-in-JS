/**
 * Sample Output:
 *     1      1
 *     12    21
 *     123  321
 *     12344321
 */

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function pattern(n) {
    let space = 2 * (n - 1);
    for (let i = 1; i <= n; i++) {
        let res = ""

        for (let j = 1; j <= i; j++) {
            res += j;
        }
        for (let j = 1; j <= space; j++) {
            res += " ";
        }
        for (let j = i; j >= 1; j--) {
            res += j;
        }
        space -= 2;
        console.log(res)
    }

}
rl.question("Enter rows :", n => {
    pattern(n);
    rl.close();
})
