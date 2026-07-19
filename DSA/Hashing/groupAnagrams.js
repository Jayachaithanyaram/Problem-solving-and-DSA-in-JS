function groupAnagrams(strs) {
    let map = new Map()
    for (let word of strs) {
        let key = word.split("").sort().join("");
        if (map.has(key)) {
            map.get(key).push(word)
        }
        else {
            map.set(key, [word])
        }
    }
    return map
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))