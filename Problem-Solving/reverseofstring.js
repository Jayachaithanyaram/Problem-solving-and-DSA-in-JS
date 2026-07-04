function reverseAstring(a) {
    for (let i = a.length - 1; i >= 0; i--) {
        console.log(a[i])
    }

}
reverseAstring("ram");

//method 2
function revstr(a) {
    if(a != "string"){
        console.log("enter a string");
    }
    let result = "";
    for (let i = a.length - 1; i >= 0; i--) {
        result = result + a[i];
        //result += a[i]
    }
    console.log(result)
}
revstr(12345);
revstr("ramudu")

//method 3k
function king(a) {
    return a.split("").reverse().join("");
}
console.log(king("chandu"));