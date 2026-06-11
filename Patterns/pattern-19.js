/**     Sample Output:
 *
 *      * * * * * * * * * *
 *      * * * *     * * * *
 *      * * *         * * *
 *      * *             * *
 *      *                 *
 *      *                 *
 *      * *             * *
 *      * * *         * * *
 *      * * * *     * * * *
 *      * * * * * * * * * *
 */

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function pattern(n) {
    let insp = 0
    for (let i = 0; i < n; i++) {
        let res = ""

        for (let j = 1; j <= n - i; j++) {
            res += "*"
        }
        for (let j = 0; j < insp; j++) {
            res += " "
        }
        // for (let j = 0; j < 2 * i; j++) {
        //     res += " "
        // }
        for (let j = 1; j <= n - i; j++) {
            res += "*"
        }
        insp += 2
        console.log(res)
    }
    insp = 8
    for (let i = 1; i <= n; i++) {
        let res = ""

        for (let j = 1; j <= i; j++) {
            res += "*"
        }
        for (let j = 0; j < insp; j++) {
            res += " "
        }
        for (let j = 1; j <= i; j++) {
            res += "*"
        }
        insp -= 2
        console.log(res)
    }

}
rl.question("Enter rows :", n => {
    pattern(Number(n));
    rl.close();
})