// Brute Force method
function unionOfSortedArrays(arr1, arr2) {
    let set1 = new Set(arr1)
    let set2 = new Set()
    for (let nums of arr2) {
        set1.add(nums)
    }
    return [...set1]
}
console.log(unionOfSortedArrays([1, 2, 3, 3, 4, 5, 5], [2, 3, 4, 4, 5, 6]))

//  optimal Solution
function unionOfSortedArrays1(arr1, arr2) {
    let i = 0;
    let j = 0;
    let unionArr = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            if (unionArr.length == 0 || unionArr[unionArr.length - 1] !== arr1[i]) {
                unionArr.push(arr1[i])
            }
            i++
        } else {
            if (unionArr.length == 0 || unionArr[unionArr.length - 1] !== arr2[j]) {
                unionArr.push(arr2[j])
            }
            j++
        }

    }
    while (j < arr2.length) {
        if (unionArr.length == 0 || unionArr[unionArr.length - 1] !== arr2[j]) {
            unionArr.push(arr2[j])
        }
        j++
    }
    while (i < arr1.length) {
        if (unionArr.length == 0 || unionArr[unionArr.length - 1] !== arr1[i]) {
            unionArr.push(arr1[i])
        }
        i++
    }
    return unionArr
}
console.log(unionOfSortedArrays1([1, 2, 3, 3, 4, 5, 5], [2, 3, 4, 4, 5, 6]))
