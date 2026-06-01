function TransposeMatrix(inputarray) {
    const numberofrows = inputarray.length;
    const numberofcolumns = inputarray[0].length;

    const result = [];
    for (let i = 0; i < numberofrows; i++) {
        for (let j = 0; j < numberofcolumns; j++) {
            // console.log(inputarray[i][j])
            if (!result[j]) {
                result[j] = [];
            }
            result[j][i] = inputarray[i][j]
        }
    }
    return result;
}
const inputarray = [[3, 4, 5],
[6, 7, 8]]
console.log(TransposeMatrix(inputarray))