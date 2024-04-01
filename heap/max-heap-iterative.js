class maxHeap{
    constructor(){
        this.heap =[];
    }

    add(value){
        if(this.heap.length==0){
            this.heap.push(value)
        }else{
            this.heap.push(value);
            let child = this.heap.length-1;
            //heapify up.........................
            while(child>=0){
                let parent = Math.floor((child-1)/2);
                if(this.heap[child]>this.heap[parent]){
                    [this.heap[parent],this.heap[child]] = [this.heap[child],this.heap[parent]];
                    child = parent;
                }else{
                    break;
                }
            }
        } 
    }

    remove(){
        let removed;
        if(this.heap.length==0) return false;
        if(this.heap.length<=2){
            removed = this.heap.pop();
        }else{
            let len = this.heap.length;
            [this.heap[0],this.heap[len-1]] = [this.heap[len-1],this.heap[0]];
            removed = this.heap.pop();
            let parent = 0;
            //heapify down..............................
            while(parent<len){
                let leftChild = 2*parent+1;
                let rightChild = 2*parent+2;
                let maxChild = this.heap[leftChild]>this.heap[rightChild] ? leftChild : rightChild;
                if(this.heap[maxChild]>this.heap[parent]){
                    [this.heap[parent],this.heap[maxChild]] = [this.heap[maxChild],this.heap[parent]];
                    parent = maxChild
                }else{
                    break;
                }
            }
        } 
        return removed;
    }

    heapSort(array){
        let sortedArr = [];
        let sort = new maxHeap();
        for(let i=0;i<array.length;i++){
            sort.add(array[i]);
        }
        for(let i=0;i<array.length;i++){
            sortedArr.push(sort.remove())
        }
        return sortedArr;
    }
}

const heap = new maxHeap();
heap.add(7);
heap.add(10);
heap.add(4);
heap.add(100);
heap.remove()
console.log(heap);
console.log(heap.heapSort([3,8,1,15]))