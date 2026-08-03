function unionOfSortedArrays(arr1,arr2){
let set1 = new Set(arr1)
let set2 = new Set(arr2)
for(let nums of arr2){
    if(set2.has(nums)){
        set1.add(nums)
    }
}
return [...set1]
}
console.log(unionOfSortedArrays([1,2,3,3,4,5,5],[2,3,4,4,5,6]))