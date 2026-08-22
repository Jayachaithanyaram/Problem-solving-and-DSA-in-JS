function superiorElements(arr) {
    let maxi = -Infinity
    let n = arr.length
    let leadArr = []
    for (let i = n - 1; i >= 0; i--) {
        if (arr[i] > maxi) {
            leadArr.push(arr[i])
        }
        maxi = Math.max(maxi, arr[i])
    }
    return leadArr
}
console.log(superiorElements([10, 22, 12, 3, 0, 6]))

function superiorElements1(arr) {
    let maxi = -Infinity
    let n = arr.length
    let count = 0
    for (let i = n - 1; i >= 0; i--) {
        if (arr[i] > maxi) {
            arr[arr.length - 1 - count] = arr[i]
            count++
        }
        maxi = Math.max(maxi, arr[i])
    }
    return count
}
console.log(superiorElements1([10, 22, 12, 3, 0, 6]))