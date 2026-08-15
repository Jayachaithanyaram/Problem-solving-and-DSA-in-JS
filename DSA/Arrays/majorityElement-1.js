// brute force solution
function majorityElement(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
            if (count > (arr.length - 1) / 2) {
                return count
            }
        }
    }

}
console.log(majorityElement([2, 2, 1, 3, 3, 2, 2]))

