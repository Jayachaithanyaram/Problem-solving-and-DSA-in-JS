// Brute Force Solution
function longestSubarraywithSumK(arr, k) {
    let length = 0
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = i; j < arr.length; j++) {
            sum = sum + arr[j]
            sum == k ? length = Math.max(length, j - i + 1) : null
        }
    }
    return length
}
console.log(longestSubarraywithSumK([1, 2, 3, 1, 1, 1, 1, 4, 2, 3],3))