// Brute Force Solution 
function maximumSubArraySum(arr) {
    maxlength = null
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let sum =0
            for(let k =i;k<arr.length;k++){
              sum += arr[k]
              maxlength = Math.max(sum,maxlength)
            }
        }
    }
    return maxlength
}
console.log(maximumSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]))