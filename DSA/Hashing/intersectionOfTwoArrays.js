function intersection(nums1, nums2) {
    let setA = new Set(nums1)
    let setB = new Set()
    for (let num of nums2) {
        if (setA.has(num)) {
            setB.add(num)
        }
    }
    return [...setB]
}
console.log(intersection([1,2,3,4],[3,4,5,6]))