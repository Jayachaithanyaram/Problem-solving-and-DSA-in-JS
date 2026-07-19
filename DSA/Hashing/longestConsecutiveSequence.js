function longestConsecutiveSequence(arr) {
    let set = new Set()
    for (let num of arr) {
        set.add(num)
    }
    let maxlength = 0
    for (let num of arr) {
        if (!set.has(num - 1)) {
            let length = 1
            while ((set.has(num + 1))) {
                num++
                length++

            }
            maxlength = Math.max(maxlength, length)
        }
    }
    return maxlength
}
console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]))