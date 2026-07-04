function factorial(a) {
    if (a < 0) {
        throw new Error("'enter positive number'");
    }
    let result = 1;
    for (let i = 1; i <= a; i++) {
        result = result * i;
        //result *= i;
    }
    return result;

}
console.log(factorial(3));
console.log(factorial(4));
// console.log(factorial(-4));

//factorial using recursion
function fac(a) {
    if (a < 0) {
        throw new Error("'enter positive number'");
    }
    if (a === 0 || a === 1) {
        return 1;
    }

    return a * fac(a - 1);
}
console.log(fac(10));