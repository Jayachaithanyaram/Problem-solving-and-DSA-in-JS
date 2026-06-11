/**
 *          4 4 4 4 4 4 4
            4 3 3 3 3 3 4
            4 3 2 2 2 3 4
            4 3 2 1 2 3 4
            4 3 2 2 2 3 4
            4 3 3 3 3 3 4
            4 4 4 4 4 4 4
 */

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function pattern(n) {
    let size = 2 * n - 1;

    for (let i = 0; i < size; i++) {
        let row = "";

        for (let j = 0; j < size; j++) {

            let top = i;
            let left = j;
            let right = size - 1 - j;
            let bottom = size - 1 - i;

            let minDistance = Math.min(top, left, right, bottom);

            row += (n - minDistance) + " ";
        }

        console.log(row);
    }
}


rl.question("enter rows: ", n => {
    pattern(Number(n))
    rl.close()
})

//enter rows : your number