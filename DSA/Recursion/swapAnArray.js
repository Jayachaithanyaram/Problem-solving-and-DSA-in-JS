const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseArray(arr, left, right) {

    if (left >= right) {
        return;
    }

    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    reverseArray(arr, left + 1, right - 1);
}

rl.question("Enter array elements separated by spaces: ", (input) => {

    let arr = input.split(" ").map(Number);

    reverseArray(arr, 0, arr.length - 1);

    console.log("Reversed Array:", arr);

    rl.close();
});