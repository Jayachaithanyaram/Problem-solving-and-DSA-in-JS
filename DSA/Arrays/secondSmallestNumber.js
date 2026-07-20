function secondSmallestNumber(arr) {
    let smallestNumber = arr[0]
    let secondSmallNumber = arr[1]
    for (let num of arr) {
        if (num < smallestNumber) {
            smallestNumber = num
            secondSmallNumber = smallestNumber
        }
    }
    return secondSmallNumber
}
console.log(secondSmallestNumber([1,2,3,4,5]))