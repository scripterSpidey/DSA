class maxHeap{
    constructor(){
        this.heap = [];
    }

    heapify(i,arr){

        let parent = i;
        let leftChild = 2*i+1;
        let rightChild = 2*i+2;
        if(leftChild<arr.length && arr[leftChild]>arr[parent]){
            parent = leftChild;
        }
        if(rightChild<arr.length && arr[rightChild]>arr[parent]){
            parent = rightChild;
        }
        if(parent!=i){
            [arr[parent],arr[i]] = [arr[i],arr[parent]];
            this.heapify(parent,arr)
        }
        return arr;
    }

    creteHeap(arr){
        for(let i=Math.floor(arr.length)-1;i>=0;i--){
            this.heapify(i,arr)
        }
        return arr;
    }

    add(value){
        this.heap.push(value);
        if(this.heap.length>1){
            this.creteHeap(this.heap)
        }
    }

    remove(value){
        if(this.heap.length==1){
            this.pop();
            return;
        }else if(value){
            for(let i=0;i<this.heap.length;i++){
                if(this.heap[i]===value){
                    [this.heap[i],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[i]]
                }
            }
        }else{
            [this.heap[0],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[0]]
        }
        this.heap.pop();
        this.creteHeap(this.heap);
    }
}

const heap = new maxHeap();
let arr = heap.creteHeap([3,6,8,10,1]);
heap.add(9);
heap.add(10);
heap.add(100);
heap.add(0);
console.log(heap)
heap.remove()
console.log(heap)
// console.log(arr)