function createHeap(array){
    for(let i=Math.floor(array.length/2);i>=0;i--){
        heapify(i,array)
    }
    return array;
}

function heapify(index,heap){
    let parent  = index;
    let leftChild = 2*parent +1;
    let rightChild = 2*parent+2;
    if(parent<heap.length && heap[leftChild]<heap[parent]){
        parent = leftChild;        
    }
    if(parent<heap.length && heap[rightChild]<heap[parent]){
        parent = rightChild;
    }
    
    if(parent!==index){
        [heap[parent],heap[index]] = [heap[index],heap[parent]];
        heapify(parent,heap)
    }
}

let array = [3,9,1,0,3,4,6,2];

function heapSort(array){
    const sortedArray = [];
    while(array.length){
        array = createHeap(array);
        sortedArray.push(array.shift());
    }
    return sortedArray;
}

const sortedArray = heapSort([5,1,8,0,2,43,3,9]);
console.log(sortedArray)
