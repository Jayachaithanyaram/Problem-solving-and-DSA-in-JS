/**
 *      * * * *
 *      *     *
 *      *     *
 *      * * * *
 */

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function pattern(n) {
    let res = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0 || i === n - 1 || j === n - 1) {
                res += "* "
            } else {
                res += "  "
            }
        }
        res += "\n"
    }
    console.log(res)
}

rl.question("enter rows: ", n => {
    pattern(Number(n))
    rl.close()
})

//enter rows : your number