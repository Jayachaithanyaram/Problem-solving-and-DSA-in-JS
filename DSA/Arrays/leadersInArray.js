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