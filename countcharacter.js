const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function countcharacter(a) {
    let result = {}
    a = a.toLowerCase();
    for (let i = 0; i < a.length; i++) {
        if (!result[a[i]]) {
            result[a[i]] = 0
        }
        result[a[i]] = result[a[i]] + 1
    }
    console.log(result)
}
rl.question("Enter the sentence :",(input)=>{
    countcharacter(input);
    rl.close();
})