function leapyear(a) {
    if (a < 0) {
        throw new Error("enter positive year");
    }
    if (typeof a === "string") {
        throw new Error("enter a year");
    }
    if (a % 4 == 0 && a % 100 != 0 || a % 400 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(leapyear(2000));
console.log(leapyear(1900));
console.log(leapyear(2024));
// console.log(leapyear(-2019));
// console.log(leapyear("ram"));
