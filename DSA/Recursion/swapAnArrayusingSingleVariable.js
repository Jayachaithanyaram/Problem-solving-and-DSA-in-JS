const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseArray(arr, left) {

    if (left >= arr.length / 2) {
        return;
    }

    let temp = arr[left];
    arr[left] = arr[arr.length - left - 1];
    arr[arr.length - left - 1] = temp;

    reverseArray(arr, left + 1);
}

rl.question("Enter array elements separated by spaces: ", (input) => {

    let arr = input.split(" ").map(Number);

    reverseArray(arr, 0);

    console.log("Reversed Array:", arr);

    rl.close();
});