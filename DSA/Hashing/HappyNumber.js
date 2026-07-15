
function squareSum(n) {
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}
function HappyNumber(n) {

    let set = new Set();
    while (n !== 1) {
        if (set.has(n)) {
            return false;
        }
        set.add(n);
        n = squareSum(n);
    }
    return true;
}
console.log(HappyNumber(19));
console.log(HappyNumber(2));