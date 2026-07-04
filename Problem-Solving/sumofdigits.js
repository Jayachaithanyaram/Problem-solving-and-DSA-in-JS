function sumofdigits(a) {
    if (a < 1) {
        throw new Error("enter a positive number");
    }
    let string = a.toString();
    let split = string.split("");
    let sum = 0;
    split.forEach(num => {
        sum = sum + parseInt(num);
    })

    return sum;
}
console.log(sumofdigits(25));
console.log(sumofdigits(75));


//method 2
function addofnum(a) {
    let sum = 0;
    while (a > 0) {
        let lastdigit = a % 10;
        sum = sum + lastdigit;
        a = Math.floor(a / 10);
    }
    return sum;
}
console.log(addofnum(55));