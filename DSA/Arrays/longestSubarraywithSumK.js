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
function longestSubarrayWithSumK1(arr, k) {

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

console.log(longestSubarrayWithSumK1([2, 0, 0, 3], 3));
// [1, 2, 3, 1, 1, 1, 1, 4, 2, 3]

//  Optimal Solution Two pointer Approach
function longestSubarrayWithSumK2(arr, k) {
    let n = arr.length;
    let sum =0
    let maxlen = 0
    let left = 0
    let right = 0
    while (right < n) {
        while (left <= right && sum > k) {
            sum -= arr[left]
            left++
        }
        if (sum == k) {
            maxlen = Math.max(maxlen, right - left )
        }
        right++
        if (right < n) sum += arr[right]
    }
    return maxlen
}
console.log(longestSubarrayWithSumK2([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 6))