// Brute Force Solution
function sortingArray012(arr) {
    let count0 = 0
    let count1 = 0
    let count2 = 0
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == 0) {
            count0++
        } else if (arr[i] == 1) {
            count1++
        } else if (arr[i] == 2) {
            count2++
        }
    }
    for (let i = 0; i < count0; i++) {
        arr[i] = 0
    }
    for (let i = count0; i < count0 + count1; i++) {
        arr[i] = 1
    }
    for (let i = count0 + count1; i < arr.length; i++) {
        arr[i] = 2
    }
    return arr
}
console.log(sortingArray012([0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]))