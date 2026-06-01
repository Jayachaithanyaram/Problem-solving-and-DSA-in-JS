const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

function palindrome(a) {
    for (let i = 0; i < a.length / 2; i++) {
        if (a[i] !== a[a.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

rl.question("enter a word:", (input) => {
    console.log(palindrome(input));
    rl.close();
})