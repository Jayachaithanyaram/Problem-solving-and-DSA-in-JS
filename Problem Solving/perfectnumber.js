const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function perfectnumber(input) {
    const result = [];
    for (let i = 1; i < input; i++) {
        if (input % i === 0) {
            // console.log(i)
            result.push(i)
        }
    }
    let sum = 0;
    result.forEach(d => {
        sum = sum + d;
    });
    if (input === sum) {
        return true;
    } else {
        return false;
    }
}
rl.question("enter a number :", no => {
    console.log(perfectnumber(Number(no)));
    rl.close();
})

//method 2
// function perfectnumber(n) {
//     let sum = 0;

//     for (let i = 1; i < n; i++) {
//         if (n % i === 0) {
//             sum += i;
//         }
//     }

//     return sum === n;
// }

// console.log(perfectnumber(6));  // true
// console.log(perfectnumber(10)); // false