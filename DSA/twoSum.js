const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; i < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}
const res = twoSum([2, 7, 11, 15],9)
console.log(res)