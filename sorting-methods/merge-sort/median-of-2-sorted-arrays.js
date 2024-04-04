
"4. Median of Two Sorted Arrays;"
"Given two sorted arrays nums1 and nums2 of size m and n respectively,"
" return the median of the two sorted arrays."
"The overall run time complexity should be O(log (m+n))."

'Example 1:'
let nums1 = [1,3];
let  nums2 = [2];
'Output: 2.00000'
'Explanation: merged array = [1,2,3] and median is 2.'

'Example 2:'
'Input: nums1 = [1,2], nums2 = [3,4]'
'Output: 2.50000'
'Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.'

"Approach:"
"Median are found for sorted elements. "
"One way we can do this by concatating the 2 sorted arrays and sort them again using array.sort()"
"But this takes a lot of time complexity Best case is O(N)";
"Or we can use the concept of merge sort where we can reduce the time complecity to logarithemic"

var findMedianSortedArrays = function(nums1, nums2) {
    let sorted= [];
    //we can reduce the time complexity by tracking the index of pushed values
    //in the prev example we used shift method, which consumes O(n) time complexity to rearrange the array
    let i=0;
    let j=0;
    //since this is an sorted array, we can directly merge them without the need of splitting again
    while(i< nums1.length && j< nums2.length){
        if(nums1[i]<nums2[j]){
            sorted.push(nums1[i++]);
        }else{
            sorted.push(nums2[j++]);
        }
    }
    while(i<nums1.length){
        sorted.push(nums1[i++])
    }
    while(j<nums2.length){
        sorted.push(nums2[j++])
    }
    let mid = Math.floor(sorted.length/2)
    if(sorted.length%2==0){
        return (sorted[mid] + sorted[mid-1])/2
    }else{
        return sorted[mid]
    }
};

console.log(findMedianSortedArrays(nums1,nums2))
"_________________________________________________________________________________"