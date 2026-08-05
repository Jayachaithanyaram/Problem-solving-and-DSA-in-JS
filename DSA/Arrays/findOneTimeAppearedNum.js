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

// Optimal Solution
function findOneTimeAppearedNum2(arr) {
    let map = new Map()
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    for (let [key, value] of map) {
        if (value == 1) {
            return key
        }
    }
}
console.log(findOneTimeAppearedNum2([1, 1, 2, 3, 3, 4, 4, 5, 5]))

// Xor solution
function findOneTimeAppearedNum3(arr) {
let xor = 0
for(let i =0;i<arr.length;i++){
    xor = xor ^ arr[i]
}
return xor
}
console.log(findOneTimeAppearedNum3([1, 1, 2, 3, 3, 4, 4, 5, 5]))
