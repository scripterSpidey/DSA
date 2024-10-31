/**
 * Stable sorting algorithm
 * which means elemenst appear in the same order in sorted array as ther appeaered in the unsorted array
 */

let array = [4,1,5,7,1,0]




function insertionSort(array){
    for(let i=1;i<array.length;i++){
        let current = array[i];
        let j = i-1;
        while(array[j]>current && j>=0){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = current;
    }
}


insertionSort(array)

console.log(array)