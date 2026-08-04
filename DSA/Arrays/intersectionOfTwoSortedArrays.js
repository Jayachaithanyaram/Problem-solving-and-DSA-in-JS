// Brute force Solution
function intersectionOfTwoSortedArrays(a, b) {
    let n1 = a.length
    let n2 = b.length
    let visArr = new Array(n2).fill(0)
    let ansArr = []
    for (let i = 0; i < n1; i++) {
        for (let j = 0; j < n2; j++) {
            if (a[i] == b[j] && visArr[j] == 0) {
                ansArr.push(a[i]);
                visArr[j] = 1;
                break;
            }
            if (b[j] > a[i]) { break; }
        }
    }
    return ansArr
}
console.log(intersectionOfTwoSortedArrays([1, 2, 2, 3, 4, 4, 5], [2, 3, 3, 4, 5, 5, 6]))

//  Optimal Solution
function intersectionOfTwoSortedArrays1(a, b) {
    let ansArr = []
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] < b[j]) {
                break
            } else if (a[i] == b[j]) {
                ansArr.push(a[i])
                i++
                j++
            }
        }
    }
    return ansArr
}
console.log(intersectionOfTwoSortedArrays1([1, 2, 2, 3, 3, 4, 4, 5], [2, 3, 3, 4, 5, 5, 6]))

// Optimal Solution
function intersectionOfTwoSortedArrays2(a, b) {
    let i = 0
    let j = 0
    let ansArr =[]
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            i++
        }
        if (b[j < a[i]]) {
            j++

        }else {
            ansArr.push(a[i])
            i++
            j++
        }

    }
    return ansArr
}
console.log(intersectionOfTwoSortedArrays2([1, 2, 2, 3, 3, 4, 4, 5], [2, 3, 3, 4, 5, 5, 6]))
