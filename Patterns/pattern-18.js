/**     Sample Output:
 *
 *      E
 *      DE
 *      CDE
 *      BCDE
 *      ABCDE
 */

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function pattern(n) {
    let lastchar = 64 + n
    for (let i = 0; i < n; i++) {
        let res = ""

        for (let j = lastchar - i; j <= lastchar; j++) {
            res += String.fromCharCode(j) + " "
        }

        console.log(res)
    }

}
rl.question("Enter rows :", n => {
    pattern(Number(n));
    rl.close();
})