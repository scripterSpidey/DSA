"You are given an integer array nums and a positive integer k."

"Return the number of subarrays where the maximum element of nums appears at least k times in that subarray."

"A subarray is a contiguous sequence of elements within an array."

"Example 1:"

"Input: nums = [1,3,2,3,3], k = 2"
"Output: 6"
"Explanation: The subarrays that contain the element 3 at least 2 times are: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3] and [3,3]."

"Hint: FOr a valid sub array starting at 3 and ending at 6,all other starting positions before 3(0,1,2) also is a valid one."

var countSubarrays = function(nums, k) {
    let start = 0;
    let max = Math.max(...nums);
    let maxCount=0;
    let ans=0;
    for(let end=0;end<nums.length;end++){
        if(nums[end]==max) maxCount++;
        while(maxCount==k){
            if(nums[start]==max){
                maxCount--
            }
            start++;
        }
        ans+=(start)
    }
    return ans;
};