const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Palindrome(string, i) {
    if (i >= string.length / 2) {
        return true;
    }
    if (string[i] != string[string.length - i -  1]) {
        return false;
    }
    return Palindrome(string, i + 1)
}
rl.question("Enter a String: ", (input) => {
    console.log(Palindrome(input, 0));

    rl.close();
});