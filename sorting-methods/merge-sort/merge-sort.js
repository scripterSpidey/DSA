function mergeSort(arr){
    if(arr.length<2) return arr;
    let mid = Math.floor(arr.length/2);
    let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid);
    return sortArr(mergeSort(leftArr),mergeSort(rightArr));//at th root level  2 single element arrays are passed to the sortArr and they comes back as sorted arrays
}

function sortArr(leftArr,rightArr){
    let sortedArr =[];//create a new arr for sorted arr
    while(leftArr.length && rightArr.length){//empty arrays not need to be sorted. otherwise it will be an endless loop
        if(leftArr[0]<rightArr[0]){
            sortedArr.push(leftArr.shift())//shift method removes the element from original array. This ensures that there will be always new values at 0th index of arrays during while loop operation
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]; //there will be cases at top level were arrays with different lengths will be passed for sorting. In that case, the while condn leaves a single element in the left or right arrays. We need to add this element too to the sorted array.
}

console.log(mergeSort([-1,2,1,6,89,0,10,-1]));

"_________________________________________________________________________________"

/**
 * Merge sort doestn care wether the array is sorted or not , initially.
 * It will always try to sort the given array regardless of the order.
 * Big O : O(nlog(n))
 */