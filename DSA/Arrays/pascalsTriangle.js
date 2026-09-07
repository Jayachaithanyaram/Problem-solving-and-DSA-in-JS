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

// Optimized brute force solution
function pascalsTriangle1(n, r) {
    let res = 1
    for (let i = 0; i < r; i++) {
        res *= (n - i)
        res /= (i + 1)
    }
    return res
}
console.log(pascalsTriangle1(4, 2))

// Brute force solution for printing the entire row elements
function pascalsTriangle2(n) {
    // function pascalsTriangle1(n, c) {
    //     let res = 1
    //     for (let i = 0; i < c; i++) {
    //         res *= (n - i)
    //         res /= (i + 1)
    //     }
    //     return res
    // }
    for (let c = 1; c <= n; c++) {
        console.log(pascalsTriangle1(n - 1, c - 1))
    }
}
pascalsTriangle2(6)