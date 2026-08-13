// Better Solution Using Two Pointer Technique
function twoSum(arr, target) {
    let left = 0
    let right = arr.length-1
    while (left < right) {
       let sum = arr[left] + arr[right]
        if (sum == target) {
            console.log("Yes")
            return
        }else if (sum < target) {
            left++
        } else {
            right--
        }
    }
    console.log("No")
}
twoSum([3, 2, 6], 5)