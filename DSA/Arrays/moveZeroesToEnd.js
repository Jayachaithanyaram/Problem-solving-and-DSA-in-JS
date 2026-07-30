function movingZeroesToEnd(arr) {
    let j = -1
    for (let i = 0; j < arr.length; i++) {
        if (arr[i] == 0) {
            j = i
            break;
        }
    }
    for (let i = j + 1; i < arr.length; i++) {
        if (arr[i] != 0) {
            [arr[j], arr[i]] = [arr[i], arr[j]]
            j++  
        }

    }
    return arr
}
console.log(movingZeroesToEnd([1, 2, 0, 3, 0, 4, 5, 0, 0, 1]))