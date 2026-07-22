// // Brute force Solution
function LeftRotateArrayByKPlaces(arr, k) {
    let temp = []
    // loop which helps to push the k elements into the temp
    for (let i = 0; i < k; i++) {
        temp.push(arr[i])
    }
    // this loop pushes the number which are K=1 to i -k places
    for (let i = k; i < arr.length; i++) {
        arr[i - k] = arr[i]
    }
    // this loop add the temp elements to the rotated array
    for (let i = arr.length - k; i < arr.length; i++) {
        arr[i] = temp[i - (arr.length - k)]
    }
    return arr
}
console.log(LeftRotateArrayByKPlaces([1, 2, 3, 4, 5, 6, 7], 5))

// Optimal Solution
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function leftRotateArrayByKPlaces(arr, k) {
    let n = arr.length;

    k = k % n;

    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    reverse(arr, 0, n - 1);

    return arr;
}

console.log(leftRotateArrayByKPlaces([1, 2, 3, 4, 5, 6, 7], 5));