// Brute Force Solution
function rotateMatrix(matrix) {
    let n = matrix.length
    let ansMatrix = new Array(n)
    for (let i = 0; i < n; i++) {
        ansMatrix[i] = new Array(n)
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            ansMatrix[j][n - 1 - i] = matrix[i][j]
        }
    }
    return ansMatrix
}
let result = rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])
for (let row of result) {
    console.log(row.join(" "))
}

// Optimal Solution code
function rotateMatrix1(matrix) {
    let n = matrix.length
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] =
                [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < n; i++) {
        matrix[i].reverse()
    }
    return matrix
}
let result1 = rotateMatrix1([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])
for (let row of result1) {
    console.log(row.join(" "))
}