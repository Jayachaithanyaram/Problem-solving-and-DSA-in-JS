const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function wordcount(sentence) {

    let separatedSentence = sentence.trim().split(/\s+/);

    return separatedSentence.length;
    // single line code //
    // const wordcount = sentence => sentence.trim().split(/\s+/).length;
}

rl.question("Enter a sentence: ", input => {

    if (input.trim() === "") {
        console.log("Please enter a valid sentence");
        rl.close();
        return;
    }

    console.log("Word count:", wordcount(input));

    rl.close();

});