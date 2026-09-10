// Brute force solution
function fourSum(arr, target) {
    let set = new Set()
    let res = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                for (let l = k + 1; l < arr.length; l++) {
                    if ((arr[i] + arr[j] + arr[k] + arr[l]) == target) {
                        let triplet = [arr[i], arr[j], arr[k], arr[l]]
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
    }
    return res
}
console.log(fourSum([1, 0, -1, 0, -2, 2], 0))

// Better solution
function fourSum1(arr, target) {
    let set = new Set()
    let res = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let unique = new Set()
            for (let k = j + 1; k < arr.length; k++) {
                let l = target - (arr[i] + arr[j] + arr[k])
                if (unique.has(l)) {
                    let triplet = [arr[i], arr[j], arr[k], l]
                    triplet.sort((a, b) => a - b)
                    let key = triplet.join(",")
                    if (!set.has(key)) {
                        set.add(key)
                        res.push(triplet)
                    }
                }
                unique.add(arr[k])
            }
        }
    }
    return res
}
console.log(fourSum1([1, 0, -1, 0, -2, 2], 0))
