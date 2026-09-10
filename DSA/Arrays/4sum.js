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


// Optimal solution
function fourSum2(arr, target) {
    let res = []
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] == arr[i - 1]) continue
        for (let j = i + 1; j < arr.length; j++) {
            if (j != i + 1 && arr[j] == arr[j - 1]) continue
            let k = j + 1
            let l = arr.length - 1;
            while (k < l) {
                let sum = arr[i] + arr[j] + arr[k] + arr[l]
                if (sum < target) {
                    k++
                } else if (sum > target) {
                    l--
                }
                else {
                    res.push([arr[i], arr[j], arr[k], arr[l]])
                    k++
                    l--
                    while (k < l && arr[k] == arr[k - 1]) k++
                    while (k < l && arr[l] == arr[l + 1]) l--
                }
            }
        }
    }
    return res
}
console.log(fourSum2([1, 0, -1, 0, -2, 2], 0))
// console.log(fourSum1([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5], 8))