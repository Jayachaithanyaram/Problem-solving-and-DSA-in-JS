var twoSum = function(nums, target) {

    let map = new Map();

    for(let i=0;i<nums.length;i++){

        let current = nums[i];
        let needed = target-current;

        if(map.has(needed)){
            return [map.get(needed),i];
        }

        map.set(current,i);

    }

};
    console.log(twoSum([3,2,4],5))