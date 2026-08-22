function nextPermutation(arr) {
    let index = -1;
    let n = arr.length;
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            index = i;
            break;
        }
    }
    if (index === -1) {
        reverse(arr, 0, n - 1);
        return arr;
    }
    for (let i = n - 1; i > index; i--) {
        if (arr[i] > arr[index]) {
            [arr[i], arr[index]] = [arr[index], arr[i]];
            break;
        }
    }
    reverse(arr, index + 1, n - 1);

    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

console.log(nextPermutation([2,1,5,4,3,0,0]))