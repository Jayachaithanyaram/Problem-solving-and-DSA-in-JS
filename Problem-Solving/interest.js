const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function interest(amount, time, rate) {
    let total = amount * time * rate;
    let result = total / 100;
    return result;
}
// console.log(intrest(10000, 2, 2))
// console.log(intrest(1000, 5, 1))
rl.question("enter amount:", amount => {
    rl.question("enter time:", time => {
        rl.question("enter rate:", rate => {
            console.log(interest(Number(amount), Number(time), Number(rate)));
            rl.close();
        })
    })
})