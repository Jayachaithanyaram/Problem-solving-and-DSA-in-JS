// Brute force solution
function majorityElement(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
        }
        if (count > arr.length / 3 && !res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]))

// Better Solution
function majorityElement2(arr) {
    let map = new Map()
    let res = []
    let min = Math.floor(arr.length / 3)
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1)
        if (map.get(arr[i]) == min + 1) {
            res.push(arr[i])
        }
    }
    return res
}
console.log(majorityElement2([1, 1, 1, 3, 3, 2, 2, 2]))

// Optimal Solution
function majorityelement3(arr) {

    let size = arr.length

    let count1 = 0
    let count2 = 0

    let ele1
    let ele2

    for (let i = 0; i < size; i++) {

        if (count1 == 0 && arr[i] != ele2) {
            count1 = 1
            ele1 = arr[i]
        }
        else if (count2 == 0 && arr[i] != ele1) {
            count2 = 1
            ele2 = arr[i]
        }
        else if (ele1 == arr[i]) {
            count1++
        }
        else if (ele2 == arr[i]) {
            count2++
        }
        else {
            count1--
            count2--
        }
    }
    count1 = 0
    count2 = 0

    for (let i = 0; i < size; i++) {

        if (arr[i] == ele1) {
            count1++
        }
        else if (arr[i] == ele2) {
            count2++
        }
    }

        let res = []

        if (count1 > size / 3) {
            res.push(ele1)
        }

        if (count2 > size / 3) {
            res.push(ele2)
        }

        return res
}

console.log(majorityelement3([1, 1, 1, 1, 3, 2, 2, 2]))
