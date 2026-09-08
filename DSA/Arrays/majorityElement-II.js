// Brute force solution
function majorityElement(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
        }
        if (count > arr.length / 3 && !res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]))