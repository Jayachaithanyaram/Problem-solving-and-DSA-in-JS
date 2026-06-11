/**     Sample Output:
 *
 *      *        *
 *      **      **
 *      ***    ***
 *      ****  ****
 *      **********
 *      ****  ****
 *      ***    ***
 *      **      **
 *      *        *
*/

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function pattern(n) {

    let spaces = 2 * n - 2
    for (let i = 1; i <= 2 * n - 1; i++) {
        let res = ""
        let stars = i
        if (i > n) {
            stars = 2 * n - i
        }
        for (let j = 1; j <= stars; j++) {
            res += "*"
        }
        for (let j = 1; j <= spaces; j++) {
            res += " "
        }
        for (let j = 1; j <= stars; j++) {
            res += "*"
        }
        if (i < n) {
            spaces -= 2
        } else {
            spaces += 2
        }
        console.log(res)
    }

}
rl.question("Enter rows :", n => {
    pattern(Number(n));
    rl.close();
})

// enter rows : 5