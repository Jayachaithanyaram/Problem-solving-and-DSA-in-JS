// const { stdin } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function vowelConsonent(string) {
    string = string.toLowerCase();
    string = string.replace(/ /g, '');
    console.log("inputstring after cleaned :", string)
    let vowels = "aeiou";
    let consonents = "bcdfghjklmnpqrstvwxyz"
    let vowelcount = 0;
    let consonentcount = 0;
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            vowelcount++;
        } else if (consonents.includes(string[i])) {
            consonentcount++;
        }
    }
    return { vowelcount, consonentcount };

}
// console.log(vowelConsonent("aeiou"))
rl.question("enter the string :", input => {
    console.log(vowelConsonent(input))
    rl.close();
})
