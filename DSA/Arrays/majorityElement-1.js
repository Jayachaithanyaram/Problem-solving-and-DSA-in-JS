// brute force solution
function majorityElement(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
            if (count > (arr.length - 1) / 2) {
                return arr[i]
            }
        }
    }

}
console.log(majorityElement([2, 2, 1, 3, 3, 2, 2]))

//  Solution using Hashmap
function majorityElement1(arr) {
    let map = new Map()
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    for (let [key, value] of map) {
        if (value > (arr.length - 1) / 2) {
            return key
        }
    }
}
console.log(majorityElement1([2, 2, 1, 3, 3, 2, 2]))

//  Boyer-Moore voting Algorithm
function majorityElement1(arr) {
    let candidate = null
    let count = 0
    for (let num of arr) {
        if (count === 0) {
            candidate = num;
        }

        if (num == candidate) {
            count++
        } else {
            count--
        }
    }
    return candidate

}
console.log(majorityElement1([2, 2, 1, 1, 1, 1, 1, 2, 2]))