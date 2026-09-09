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
                }
            }
        }
    }
    return res
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))

// Better solution
function threeSum1(arr) {
    let res = []
    let unique = new Set()
    for (let i = 0; i < arr.length; i++) {
        let set = new Set()
        for (let j = i + 1; j < arr.length; j++) {
            let k = -(arr[i] + arr[j])
            if (set.has(k)) {
                let triplet = [arr[i], arr[j], k]
                triplet.sort((a, b) => a - b)
                let key = triplet.join(",")
                if (!unique.has(key)) {
                    unique.add(key)
                    res.push(triplet)
                }
            }
            set.add(arr[j])
        }
    }
    return res
}
console.log(threeSum1([-1, 0, 1, 2, -1, -4]))