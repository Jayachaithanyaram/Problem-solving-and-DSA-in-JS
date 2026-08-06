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
console.log(longestSubarraywithSumK([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3))

// Better Solution
function longestSubarrayWithSumK(arr, k) {

    let map = new Map();

    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];
        if (sum === k) {
            maxLen = i + 1;
        }
        let rem = sum - k;

        if (map.has(rem)) {
            let len = i - map.get(rem);
            maxLen = Math.max(maxLen, len);
        }
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }

    return maxLen;
}

console.log(longestSubarrayWithSumK([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3));