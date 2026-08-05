// Brute Force Soulution
function findOneTimeAppearedNum(arr) {

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == num) {
                count++
            }

        }
        if (count == 1) {
            return num
        }
    }
}
console.log(findOneTimeAppearedNum([1, 1, 2, 3, 3, 4, 4, 5, 5]))

// Better Solution
function findOneTimeAppearedNum1(arr) {
    let max = 0
    for (let num of arr) {
        max = Math.max(max, num)
    }
    let hash = new Array(max).fill(0)
    for (let num of arr) {
        hash[num]++
    }
    for (let num of arr) {
        if (hash[num] == 1) {
            return num
        }
    }
}
console.log(findOneTimeAppearedNum1([1, 1, 2, 3, 3, 4, 4, 5, 5]))
