"2032. Two Out of Three"

'Given three integer arrays nums1, nums2, and nums3. '
'return a distinct array containing all the values that are present in at least two out of the three arrays.'
' You may return the values in any order.'

'Example 1:'
'Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]'
'Output: [3,2]'
'Explanation: The values that are present in at least two arrays are:'
'- 3, in all three arrays.'
'- 2, in nums1 and nums2.'

'Example 2:'
'Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]'
'Output: [2,3,1]'
'Explanation: The values that are present in at least two arrays are:'
'- 2, in nums2 and nums3.'
'- 3, in nums1 and nums2.'
'- 1, in nums1 and nums3.'

'Intuition'
'This can be done using 3 for loops.'
'But the time complexity will O(n3) in that case. So we need an another aprroach.'
'If we could map the elements and in which arrays they are present in, we can get the answer more efficiently.'

'Approach'
'I will create an object. Inside this I will map each number of all 3 arrays to the array names they are present in.'
'I can store the array names as values in map in the form of array or sets.'
'Finally I can return the elements whose length is more than or equal to 2.'

var twoOutOfThree = function(nums1, nums2, nums3) {
    let res = [];
    let map = {};
    //iterate over nums1
    for(let i=0;i<nums1.length;i++){
        //first we set all keys into the map. 1 indicates nums1
        // {num:Set(1)}
        map[nums1[i]] = new Set([1])
    }
    //iterate over nums2
    for(let i=0;i<nums2.length;i++){
        if(!(nums2[i] in map)){
            //if num is not present in map, we will create one with
            // value as set
            map[nums2[i]] = new Set()
        }
        //set ensures that duplicates will not be added 
        map[nums2[i]].add(2)
    }
    //iterate over nums3
    for(let i=0;i<nums3.length;i++){
        if(!(nums3[i] in map)){
            map[nums3[i]] = new Set()
        }
        map[nums3[i]].add(3)
    }
    for(const key in map){
        //if set size is >= 2 implies the key of this map is present
        //in more than 2 arrays
        if(map[key].size>=2){
            res.push(key)
        }
    }
    return res;
};