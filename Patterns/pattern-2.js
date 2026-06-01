/*
    *
    **
    ***
    ****
    *****
*/

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function pattern(a) {
    for (let i = 0; i <a; i++) {
        let res = "";
        for (let j = 0; j <=i; j++) {
            res += " *";
        }
        console.log(res)
    }
}
rl.question("Enter rows :", a => {
    pattern(a);
    rl.close();
})
