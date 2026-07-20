// // better solution

// function secondLargestElement(arr) {
//     let largestElement = arr[0]
//     for (let num of arr) {
//         if (num > largestElement) {
//             largestElement = num
//         }
//     }
//     let secondLargestElement = -1
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > secondLargestElement && arr[i] !== largestElement) {
//             secondLargestElement = arr[i]
//         }
//     }

//     return secondLargestElement

// }
// console.log(secondLargestElement([1, 2, 3, 7, 7, 5]))


// optimal solution
function secondLargestElement(arr) {
    let largestElement = arr[0]
    let secondLargestElement = -1
    for (let num of arr) {
        if (num > largestElement) {
            secondLargestElement = largestElement
            largestElement = num
        }
    }
    return secondLargestElement
}

console.log(secondLargestElement([1, 2, 3, 5]))