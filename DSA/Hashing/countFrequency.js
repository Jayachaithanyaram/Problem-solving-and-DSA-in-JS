function countFrequency(arr) {
    let map = new Map()
    for (let num of arr) {

        map.set(num, (map.get(num) || 0) + 1)
    }
    return map
}
let arr = [1, 2, 2, 3, 1, 4, 2];

let frequency = countFrequency(arr);

for (let [key, value] of frequency) {
    console.log(key, "->", value);
}
