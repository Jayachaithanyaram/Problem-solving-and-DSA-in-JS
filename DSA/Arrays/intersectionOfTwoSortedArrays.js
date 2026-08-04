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