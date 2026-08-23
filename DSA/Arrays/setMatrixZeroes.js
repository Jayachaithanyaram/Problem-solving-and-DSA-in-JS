// Brute Force Solution
function setMatrixZeroes(arr) {
    let m = arr.length
    let n = arr[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] == 0) {
                markRow(i)
                markColumn(j)
            }
        }
    }
    function markRow(i) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] != 0) {
                arr[i][j] = -1
            }
        }
    }
    function markColumn(j) {
        for (let i = 0; i < m; i++) {
            if (arr[i][j] != 0) {
                arr[i][j] = -1
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] == -1) {
                arr[i][j] = 0
            }
        }
    }
    return arr
}
let result = setMatrixZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
])

for (let row of result) {
    console.log(row.join(" "))
}