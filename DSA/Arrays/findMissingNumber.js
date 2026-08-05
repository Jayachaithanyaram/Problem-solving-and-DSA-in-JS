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

