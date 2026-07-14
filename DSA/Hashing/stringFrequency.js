function stringFrequency(str) {
    let map = new Map()
    for (let ch of str) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    return map
}
let frequency = stringFrequency("banana");

for (let [key, value] of frequency) {
    console.log(key, "->", value);
}