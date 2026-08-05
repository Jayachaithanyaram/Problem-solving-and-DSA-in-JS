// Brute Force Solution
function FindMissingNumber(arr, N) {
    for (let i = 1; i <= N; i++) {
        let flag = 0
        for (let j = 0; j < N - 1; j++) {
            if (arr[j] == i) {
                flag = 1
                break
            }
        }
        if (flag == 0) {
            return i
        }

    }
}
console.log(FindMissingNumber([1, 2, 4, 5], 5))

// Better Solution
function FindMissingNumber1(arr, N) {
    let set = new Set(arr)
    for (let i = 1; i < N; i++) {
        if (!set.has(i)) {
            return i
        }
    }
}
console.log(FindMissingNumber1([1, 2, 4, 5], 5))

// Using Hashing
function missingNumber(arr, n) {

    let hash = new Array(n + 1).fill(0);

    for (let num of arr) {
        hash[num] = 1;
    }

    for (let i = 1; i <= n; i++) {
        if (hash[i] === 0) {
            return i;
        }
    }
}
console.log(missingNumber([1, 2, 4, 5], 5));
//
// Optimal Solution
function FindMissingNum(arr, N) {
    let xor1 = 0
    let xor2 = 0
    let n = N - 1
    for (let i = 0; i < n; i++) {
        xor2 = xor2 ^ arr[i]
        xor1 = xor1 ^ (i + 1)
    }
    xor1 = xor1 ^ N
    return xor1 ^ xor2
}
console.log(FindMissingNum([1, 2, 4, 5], 5))