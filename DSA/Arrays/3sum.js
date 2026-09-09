// Brute force solution
function threeSum(arr) {
    let set = new Set()
    let res = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if ((arr[i] + arr[j] + arr[k]) == 0) {
                    let triplet = [arr[i], arr[j], arr[k]]
                    triplet.sort((a, b) => a - b)
                    let key = triplet.join(",")
                    if (!set.has(key)) {
                        set.add(key)
                        res.push(triplet)
                    }
            a    }
            }
        }
    }
    return res
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
