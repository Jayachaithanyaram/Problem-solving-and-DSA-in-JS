function smallestnum(a, b, c) {
    if (a < b && a < c) {
        console.log("this is smallest number", a)
    } else if (b < a && b < c) {
        console.log("this is smallest number", b);
    } else if (c < a && c < b) {
        console.log("this is smallest number", c)
    }
}
smallestnum(18, 22, 13);

//method 2;
function smallnum(a, b, c) {
    let smallestnumber = a;
    if (b < smallestnumber) {
        smallestnumber = b;
    } else if (c < smallestnumber) {
        smallestnumber = c;
    }
    return smallestnumber;
}
console.log(smallnum(13,17,11));