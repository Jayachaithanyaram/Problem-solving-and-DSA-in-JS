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