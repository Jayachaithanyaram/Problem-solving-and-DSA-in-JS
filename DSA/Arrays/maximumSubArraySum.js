// Brute Force Solution
function maximumSubArraySum(arr) {
    maxlength = null
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let sum = 0
            for (let k = i; k <= j; k++) {
                sum += arr[k]
                maxlength = Math.max(sum, maxlength)
            }
        }
    }
    return maxlength
}
console.log(maximumSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]))
// better solution

function maximumSubArraySum1(arr) {
    maxlength = -Infinity
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            maxlength = Math.max(sum, maxlength)
        }
    }
    return maxlength
}
console.log(maximumSubArraySum1([-2, -3, 4, -1, -2, 1, 5, -3]))

// Optimal Solution using kadane's algorithm to print the max sum
function maximumSubArraySum2(arr) {
    let sum = 0
    let maxlen = -Infinity
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum > maxlen) {
            maxlen = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
      return maxlen
}
console.log(maximumSubArraySum2([-2, -3, 4, -1, -2, 1, 5, -3]))


// Optimal Solution using kadane's Algorithm to print the maximum sum sub array
function maximumSubArraySum3(arr) {
    let sum = 0
    let maxlen = -Infinity
    let ansStart = -1
    let ansEnd = -1
    let start = 0
    for (let i = 0; i < arr.length; i++) {
        if (sum == 0) start = i
        sum += arr[i]
        if (sum > maxlen) {
            maxlen = sum
            ansStart = start
            ansEnd = i
        }
        if (sum < 0) {
            sum = 0
        }
    }
      return arr.slice(ansStart, ansEnd + 1)
}
console.log(maximumSubArraySum3([-2, -3, 4, -1, -2, 1, 5, -3]))
