// Pascals triangle for where row and column are given and the element is to be returned
// Brute force solution
function pascalsTriangle(r, c) {
    let num = 1
    for (let i = 1; i < r; i++) {
        num *= i
    }
    let den1 = 1
    for (let i = 1; i < c; i++) {
        den1 *= i
    }
    let bal = r - c
    let den2 = 1
    for (let i = 1; i <= bal; i++) {
        den2 *= i
    }
    let result = num / (den1 * den2)
    return result
}
console.log(pascalsTriangle(5, 3))
