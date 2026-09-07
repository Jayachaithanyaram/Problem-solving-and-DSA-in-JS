// // Pascals triangle for where row and column are given and the element is to be returned
// // Brute force solution
// function rowColumnElement(r, c) {
//     let num = 1
//     for (let i = 1; i < r; i++) {
//         num *= i
//     }
//     let den1 = 1
//     for (let i = 1; i < c; i++) {
//         den1 *= i
//     }
//     let bal = r - c
//     let den2 = 1
//     for (let i = 1; i <= bal; i++) {
//         den2 *= i
//     }
//     let result = num / (den1 * den2)
//     return result
// }
// console.log(rowColumnElement(5, 3))

// // Optimized brute force solution
// function rowColumnElement1(n, r) {
//     let res = 1
//     for (let i = 0; i < r; i++) {
//         res *= (n - i)
//         res /= (i + 1)
//     }
//     return res
// }
// console.log(rowColumnElement1(4, 2)) /*we have to pass the arguments as n-1 and r-1 , which means 5-1, 3-1*/

// // Brute force solution for printing the entire row elements
// function rowElements(n) {
//     // function pascalsTriangle1(n, c) {
//     //     let res = 1
//     //     for (let i = 0; i < c; i++) {
//     //         res *= (n - i)
//     //         res /= (i + 1)
//     //     }
//     //     return res
//     // }
//     for (let c = 1; c <= n; c++) {
//         console.log(rowElements(n - 1, c - 1))
//     }
// }
// rowElements(6)

// // optimized solution for printing the entire elements in a row
// function ncr(n) {
//     let ans = 1
//     console.log(ans)
//     for (let i = 1; i < n; i++) {
//         ans *= (n - i)
//         ans /= i
//         console.log(ans)
//     }
// }
// ncr(6)


// Brute force solution for printing the entire pascals triangle
function ncr(n, r) {
    let ans = 1
    for (let i = 0; i < r; i++) {
        ans *= (n - i)
        ans /= (i + 1)
    }
    return ans
}
function pascalsTriangle(n) {
    let ans = []
    for (let row = 1; row <=n; row++) {
        let temparr = []
        for (let column = 1; column <=row; column++) {
            temparr.push(ncr(row - 1, column - 1))
        }
        ans.push(temparr.join(" "))
    }
    return ans
}
console.log(pascalsTriangle(5))
