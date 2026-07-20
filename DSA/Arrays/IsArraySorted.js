    function CheckArraySorted(arr) {
        for(let i = 1;i<arr.length;i++){
            if(arr[i]<arr[i-1]){
                return false
            }
        }
        return true
    }
    console.log(CheckArraySorted([1, 2, 2, 3, 4, 5]))
    console.log(CheckArraySorted([1, 2, 1, 3, 4]))  