// brute force solution
function majorityElement(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
            if (count > (arr.length - 1) / 2) {
                return count
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
            return value
        }
    }
}
console.log(majorityElement1([2, 2, 1, 3, 3, 2, 2]))