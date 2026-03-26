const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function tipamount(totalamount, tippercent) {
    let result = []
    for (let i = 0; i < tippercent.length; i++) {
        let tip = (totalamount * tippercent[i]) / 100
        result.push(tip)
    }
    const formatter  = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });
    result = result.map(tip => formatter.format(tip))
    return result
}
rl.question("Enter total amount: ", (total) => {
    if (total.length === 0) {
        throw new Error("please enter total amount")
    }
    rl.question("Enter tip percentages separated by space: ", (input) => {
        if (input.length === 0) {
            throw new Error("please enter some tip percentages")
        }
        const tippercents = input.split(' ').map(Number)
        console.log("Tip amounts:", tipamount(total, tippercents))
        rl.close()
    }
    )
}
)
