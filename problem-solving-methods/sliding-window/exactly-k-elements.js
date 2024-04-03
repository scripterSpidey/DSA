"Given an integer array nums and an integer k, return the number of good subarrays of nums."

"A good array is an array where the number of different integers in that array is exactly k."

"For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3."
"A subarray is a contiguous part of an array."


var subarraysWithKDistinct =function(nums, k) {
    let KandMore = TotalSubArrays(nums,k);
    let lessThanK = TotalSubArrays(nums,k-1);
    console.log('hi')
    function TotalSubArrays(nums,k){  
        let map = new Map()
        let start = 0;
        let subArrays=0;//1+2+3+4+
        for(let end=0;end<nums.length;end++){
            if(!map.has(nums[end])){
                map.set(nums[end],1) 
            }else{
                map.set(nums[end],(map.get(nums[end])+1))
            }
            while(map.size>k){
                map.set(nums[start],(map.get(nums[start])-1))
                
                if(map.get(nums[start])==0){
                    map.delete(nums[start]);
                }
                start++;
            }
            subArrays+=(end-start+1)
        }
        return subArrays;
    }
    return (KandMore - lessThanK); 
};

 
let nums = [1,2,1,2,3]
let k = 2
 console.log(subarraysWithKDistinct(nums,k))  