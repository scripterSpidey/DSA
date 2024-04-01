'Bubble Sort';
'Insertion Sort';
'Quick Sort';
'Merge Sort';

'Bubble Sort' //poor sorting algorithm................
//............................

let array = [3,2,6,1,8,0,3,-8];

function bubbleSort(){
    let swapped;
    do{
        swapped = false;
        for(let i=0;i<array.length-1;i++){
            if(array[i]>array[i+1]){
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped= true;
            }
        }
    }while(swapped);
   
}

// bubbleSort();
console.log(array);


'Insertion Sort';
"First element is assumed to be sorted and we take the next element to compare with previous values.";
"If prev value> curr then copy prev to curr. this step contineus until the prev value is less than curr";

function insertionSort(array){
    for(let i=1;i<array.length;i++){
        let current = array[i];//value to be compared
        let j = i-1;//pos to compare with current
        while(array[j]>current && j>=0){//j should be > lowest ind of arr & val should also be greater than curr
            array[j+1] = array[j];//copying prev elem to front elem since it is greater, replaced elem is in curr
            j--;
        }
        array[j+1] = current;//pos j will be on pos 1 unit less than the last checked elem, thats why we are inc pos by 1
    }
    return array;
}

console.log(insertionSort([-1,2,1,8,0,-9,56,1,2,3]));

"Quick Sort";

function quickSort(array){
    if(array.length < 2) return array;
    let current = array[0];
    let left = [];
    let right = [];
    for(let i=1;i<array.length;i++){
        if(array[i]<current) left.push(array[i]);
        else right.push(array[i]);
    }
    return [...quickSort(left),current,...quickSort(right)]
}

console.log(quickSort([4,1,-1,4,10,2,45,12,4,5,0,-9]))

//reducing space complexity..............

function quick(arr,pivot=0,end=arr.length-1){
    let current = arr[pivot];
    let start = pivot+1;
    let swapInd = pivot;
    for(let i=start;i<end;i++){
        if(arr[i]<current){
            let temp = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = temp;
        }else{
            swapInd++;
        }
        let tmp = arr[pivot];
    }
    return quick()
}


"merge sort";

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

console.log(mergeSort([-1,2,1,6,89,0,10,-1]));;

"Selection sorting";

function selectionSort(array){
    for(let i=0;i<array.length;i++){
        let minInd = i;
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[minInd]) minInd = j;
        }

        if(minInd!==i){
            let temp = array[minInd];
            array[minInd] = array[i];
            array[i] = temp;
        }
    }
    return array;
}

console.log(selectionSort([10,9,-1,-8,-4,0]));

'quick sort without extra arrays'
var sortArray = function (arr) {
    return quickSort2(arr);
};

function pivot(arr, start =  0, end = arr.length -  1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let pivot = arr[start];
    let swapIndex = start +  1; 
    for (let i = start +  1; i <= end; i++) { 
        if (arr[i] < pivot) {
            swap(arr, swapIndex, i);
            swapIndex++;
        }
    }
    swap(arr, start, swapIndex -  1); 
    return swapIndex -  1;

function quickSort2(arr, start =  0, end = arr.length -  1) {
    if (start < end) {
        const pivotIndex = pivot(arr, start, end);
        quickSort2(arr, start, pivotIndex);
        quickSort2(arr, pivotIndex +  1, end);
    }
    return arr;
}
}