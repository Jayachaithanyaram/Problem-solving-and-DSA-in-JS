/*
     12345
     1234
     123
     12
     1
*/
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function pattern(a) {
    for (let i = 1; i <= a; i++) {
        let res = "";
        for (let j = 1; j <= a - i + 1; j++) {
            res += j;
        }
        console.log(res)
    }
}
rl.question("Enter rows :", a => {
    pattern(a);
    rl.close();
})
