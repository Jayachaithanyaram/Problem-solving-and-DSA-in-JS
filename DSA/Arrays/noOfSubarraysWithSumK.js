// Brute force solution
function noOfSubarraysWithSumK(arr, k) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let sum = 0
            for (let k = i; k <= j; k++) {
                sum += arr[k]
            }
            if (sum == k) {
                count++
            }
        }
    }
    return count
}
console.log(noOfSubarraysWithSumK([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3))

//  Better solution
function noOfSubarraysWithSumK1(arr, k) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            if (sum == k) {
                count++
            }
        }
    }
    return count
}
console.log(noOfSubarraysWithSumK1([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3))

// Optimal Solution
function noOfSubarraysWithSumK2(arr, k) {
    let map = new Map();
    map.set(0, 1)
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        let rem = sum - k;
        count += map.get(rem) || 0
        map.set(sum, (map.get(sum) || 0) + 1)
    }

    return count
}
console.log(noOfSubarraysWithSumK2([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3))
