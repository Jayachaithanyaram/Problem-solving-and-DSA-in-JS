
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// function reverseNumber(Number) {
//     return Number.split("").reverse().join("");
// }

//  Method 2
function reverseNumber(Number) {
    let reversenum = 0;
    let lastdigit = 0;
    while (Number > 0) {
        lastdigit = Number % 10;

        reversenum = (reversenum * 10) + lastdigit
        Number = Math.floor(Number / 10)
    }
    return reversenum;
}
rl.question("Enter a number :", n => {
    console.log(reverseNumber(n));
    rl.close();
})
