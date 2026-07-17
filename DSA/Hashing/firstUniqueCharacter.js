function firstUniqueCharacter(str) {
    let map = new Map()
    for (let ch of str) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i]) == 1) {
            return [i, str[i]]
        }
    }
    return -1
}
console.log(firstUniqueCharacter("loveleetcode"))