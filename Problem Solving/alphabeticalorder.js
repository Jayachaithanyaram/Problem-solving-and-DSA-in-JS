const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function alphabeticalorder(inputstring) {
    inputstring = inputstring.toLowerCase();
    for (let i = 0; i < inputstring.length - 1; i++) {
        if (inputstring[i] > inputstring[i + 1]) {
            return false;
        }
    }
       return true;
}
rl.question("Enter a word :",input=>{
    console.log(alphabeticalorder(input))
    rl.close()
})