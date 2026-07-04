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

// Method 2
// function palindrome(a) {
//     let original = a;
//     let reversenum = 0;
//     while (a > 0) {
//         let lastdigit = a % 10;
//         reversenum = (reversenum * 10) + lastdigit
//         a = Math.floor(a / 10)
//     }
//     return original == reversenum ? true : false
// }

rl.question("enter a word:", (input) => {
    console.log(palindrome(Number(input)));
    rl.close();
})