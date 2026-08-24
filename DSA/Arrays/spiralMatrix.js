function spiralMatrix(matrix) {
    let m = matrix.length
    let n = matrix[0].length

    let ansMatrix = []

    let top = 0
    let bottom = m - 1
    let left = 0
    let right = n - 1

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            ansMatrix.push(matrix[top][i])
        }
        top++
        for (let i = top; i <= bottom; i++) {
            ansMatrix.push(matrix[i][right])
        }
        right--
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                ansMatrix.push(matrix[bottom][i])
            }
            bottom--
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                ansMatrix.push(matrix[i][left])
            }
            left++
        }
    }

    return ansMatrix
}

console.log(spiralMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))