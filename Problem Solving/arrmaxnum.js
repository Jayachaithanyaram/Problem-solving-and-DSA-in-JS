const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function arrmaxnum(a) {


    let big = a[0]

    for (let i = 1; i < a.length; i++) {
        if (a[i] > big) {
            big = a[i]
        }
    }

    return big
}

rl.question("Enter numbers separated by space: ", (input) => {
    if (input.length === 0) {
        throw new Error("please enter some numbers")
    }
    const arr = input.split(' ').map(Number)
      // convert input to array of numbers

    console.log("Maximum number:", arrmaxnum(arr))

    rl.close()
})

// method 2

// function bignum(a) {
//     const maxnum = Math.max(3, 4, 5)
//     console.log(maxnum)
// }
// bignum();