const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function areAnagrams(str1, str2) {
    // Remove spaces & convert to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    // If lengths are different → not anagram
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort both strings and compare
    let sorted1 = str1.split('').sort().join('');
    let sorted2 = str2.split('').sort().join('');

    return sorted1 === sorted2;
}

rl.question("enter first string: ", first => {
    rl.question("enter second string: ", second => {
        console.log(areAnagrams(first, second));
        rl.close()
    })
})