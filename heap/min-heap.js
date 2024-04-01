const log = console.log;

class MinHeap{
    constructor(){
        this.heap = [];
    }
    root(){
        return this.heap[0]
    }

    leaf(){
        return this.heap.slice(this.heap.length/2)
    }
    parent(value){
        if(this.heap.length ==0 ) return false;
        let index = this.heap.indexOf(value);
        if(index == -1) return false;
        return this.heap[Math.floor((index-1)/2)]
    }

    leftChild(value){
        if(this.heap.lengh ==0 ) return false;
        let index = this.heap.indexOf(value);
        if(index == -1) return false;
        return this.heap[2*index+1]
    }

    rightChild(value){
        if(this.heap.lengh ==0 ) return false;
        let index = this.heap.indexOf(value);
        if(index == -1) return false;
        return this.heap[2*index+2]
    }
    
    insert(value){
        this.heap.push(value);
        if(this.heap.length>1){
            this.createHeap(this.heap)
        }
    }
    
    remove(){
        let removed;
        if(this.heap.length == 0) return false;
        if(this.heap.length == 1){
            removed = this.heap.pop();
        }else{
            let len = this.heap.length;
            [this.heap[0],this.heap[len-1]]=[this.heap[len-1],this.heap[0]];
            removed = this.heap.pop();
            this.createHeap(this.heap);
        }
        return removed;
    }

    heapify(arr,i,len){
        let smallest = i;
        let left = 2*i+1;
        let right = 2*i+2;
        if(left<len && arr[left]<arr[smallest]){
            smallest = left;
        }
        if(right<len && arr[right]<arr[smallest]){
            smallest = right;
        }
        if(smallest!=i){
            [arr[i],arr[smallest]] = [arr[smallest],arr[i]];
            this.heapify(arr,smallest,len)
        }
    }

    createHeap(array){
        for(let i=Math.floor(array.length/2)-1;i>=0;i--){
            this.heapify(array,i,array.length);
        }
        return array;
    }

    
}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(15);
minHeap.insert(8);
minHeap.insert(20);
minHeap.insert(1);
log(minHeap.leftChild(8));
log(minHeap.rightChild(8));
log(minHeap.parent())
log(minHeap.leaf())
log(minHeap);
log('removed: ',minHeap.remove());
log(minHeap);
log(minHeap.leaf());

log(minHeap.createHeap([3, 5, 1, 4, 2]));

function heapSort(array){
    const sorting = new MinHeap();
    let sortedArray = [];
    for(let i=0;i<array.length;i++){
        sorting.insert(array[i]);
    }
    for(let i=0;i<array.length;i++){
        sortedArray.push(sorting.remove())
    }
    return sortedArray;
}

log(heapSort([6,8,1,2,9,0]))