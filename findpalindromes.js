function findpalindromes(str) {
    const words = str.split(' ');
    const palindromes = [];
    for (let word of words) {
        const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (cleanedWord === cleanedWord.split('').reverse().join('')) {
            palindromes.push(word);
        }
    }
    return palindromes;
}
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a string: ", (input) => {
    if (input.length === 0) {
        throw new Error("please enter a string")
    }
    const palindromes = findpalindromes(input);
    if (palindromes.length === 0) {
        console.log("No palindromes found.")
    }
    else {
        console.log("Palindromes found:", palindromes.join(', '));
    }
    rl.close();
});
