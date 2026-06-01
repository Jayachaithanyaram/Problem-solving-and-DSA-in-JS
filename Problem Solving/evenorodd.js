function evenOrOdd(a){
    if(a%2 == 0){
        console.log("the given number is even",a)
    }else if (a%2 != 0){
        console.log("the given number is odd",a)
    }
}
evenOrOdd(9);
evenOrOdd(4);

//single line answer
function find(a){
    return a%2 == 0 ? "even" : "odd";
}
console.log(find(11));