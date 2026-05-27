const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const chunk = (array, size) => {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        const chunkPart = array.slice(index, index + size)
        chunked.push(chunkPart);
        index = index + size;

    }
    return chunked;

}
rl.question('enter an array :', input => {
    rl.question('enter the size :', size => {
        const arr = input.split("").map(Number);
        const chunkSize = Number(size)
        console.log(chunk(arr, chunkSize));
        rl.close();
    })
})

// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));