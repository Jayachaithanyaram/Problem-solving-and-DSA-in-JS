function majorityElement(arr) {
    let map = new Map()
    for (let num of arr) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    for (let [key, value] of map) {
        if (value > Math.floor(arr.length / 2)) {
            return key
        }
    }
}
console.log(majorityElement([2, 2, 1, 1, 1, 1, 1, 2, 2]))

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