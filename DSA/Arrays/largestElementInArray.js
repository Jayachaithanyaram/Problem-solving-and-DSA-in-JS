function largestElementInArray(arr) {
    let largeElemnt = arr[0]
    for (let num of arr) {
        if (num > arr[0]) {
            largeElemnt = num
        }
    }
    return largeElemnt
}
console.log(largestElementInArray([1, 2, 3, 4, 5]))