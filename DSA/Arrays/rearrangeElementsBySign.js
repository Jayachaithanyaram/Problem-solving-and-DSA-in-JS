// Brute Force Solution
function rearrangeElementsBySign(arr) {
    let posArr = []
    let negArr = []
    for (let num of arr) {
        if (num > 0) {
            posArr.push(num)
        } else {
            negArr.push(num)
        }
    }
    for (let i = 0; i < (arr.length) / 2; i++) {
        if (!posArr[i]) {
            arr[2 * i + 1] = negArr[i]
        } else {
            arr[2 * i] = posArr[i]
        }
        if (!negArr[i]) {
            arr[2 * i] = posArr[i]
        } else {
            arr[2 * i + 1] = negArr[i]
        }
    }
    return arr
}
console.log(rearrangeElementsBySign([3, 1, -2, -5, 2, -4]))
console.log(rearrangeElementsBySign([-1, 2, 3, 4, -3, 1]))
console.log(rearrangeElementsBySign([-1, -2, -3, 4, -3, 1]))


// Better Solution
function rearrangeElementsBySign1(arr) {
    let rearr = []
    let posArr = 0
    let negArr = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            rearr[posArr] = arr[i]
            posArr += 2
        } else if (arr[i] < 0) {
            rearr[negArr] = arr[i]
            negArr += 2
        }
    }
    return rearr
}
console.log(rearrangeElementsBySign1([3, 1, -2, -5, 2, -4]))
