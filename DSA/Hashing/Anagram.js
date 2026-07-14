function Anagram(s, t) {
    if (s.length !== t.length) {
        return false
    }
    let map = new Map()
    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    for (let ch of t) {
        map.set(ch, (map.get(ch) || 0) - 1)
    }
    for (let [key, value] of map){
        if(value !==0){
            return false
        }
    }
    return true
}
console.log(Anagram("listen","silent"))