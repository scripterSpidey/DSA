class minHeap{
    constructor(){
        this.heap = [];
    }

    add(value){
        if(this.heap.length ==0){
            this.heap.push(value)
        }else{
            this.heap.push(value);
            let len = this.heap.length;
            let child = len-1;
            while(child>=0){
                let parent = Math.floor((child-1)/2);
                if(this.heap[child]<this.heap[parent]){
                    [this.heap[child],this.heap[parent]] = [this.heap[parent],this.heap[child]];
                    child = parent;
                }else{
                    break;
                }
            }
        }
    }

    remove(){
        let removed;
        if(this.heap.length == 0) return false;
        if(this.heap.length ==1){
            removed = this.heap.pop();
        }else{
            let len = this.heap.length;
            [this.heap[0],this.heap[len-1]] = [this.heap[len-1],this.heap[0]];
            removed = this.heap.pop();
            let parent = 0;
            //heapify down................................
            while(parent<len){
                let leftChild = 2*parent+1;
                let rightChild = 2*parent+2;
                let maxChild = this.heap[leftChild]>this.heap[rightChild] ? rightChild : leftChild;
                if(this.heap[maxChild]<this.heap[parent]){
                    [this.heap[maxChild],this.heap[parent]] = [this.heap[parent],this.heap[maxChild]];
                    parent = maxChild;
                }else{
                    break;
                }
            }
        }
        return removed;
    }

    heapSort(array){
        let sorted  = [];
        let creatHeap = new minHeap();
        for(let i=0;i<array.length;i++){
            creatHeap.add(array[i])
        }
        for(let i=0;i<array.length;i++){
            sorted.push(creatHeap.remove());
        }
        return sorted;
    }
}

const heap = new minHeap();
heap.add(3);
heap.add(1);
heap.add(0);
heap.add(10)
heap.remove()
console.log(heap);
console.log(heap.heapSort([4,5,2,1,0]))