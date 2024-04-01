class minHeap{
    constructor(){
        this.heap=[];
    }

    createHeap(arr){
        for(let i=Math.floor(arr.length/2);i>=0;i--){
            this.heapify(arr,i)
        }
        return arr;
    }

    heapify(arr,i){
        let parent = i;
        let leftChild = parent*2+1;
        let rightChild = parent*2+2;
        if(i<arr.length && arr[leftChild]<arr[parent]){
            parent = leftChild;
        }
        if(i<arr.length && arr[rightChild]<arr[parent]){
            parent = rightChild;
        }
        if(i!=parent){
            [arr[parent],arr[i]] = [arr[i],arr[parent]];
            this.heapify(arr,parent);
        }
    }

    add(value){
        this.heap.push(value);
        if(this.heap.length>1){
            this.createHeap(this.heap);
        }
    }

    remove(){
        let removed;
        if(this.heap.length==1){
            removed = this.heap.pop();
        }else{
            [this.heap[0],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[0]];
            removed = this.heap.pop()
            this.createHeap(this.heap)
        }
        return removed;
    }

    heapSort(arr){
        let sorted = [];
        let sort = new minHeap();
        for(let i=0;i<arr.length;i++){
            sort.add(arr[i]);
        }
        for(let i=0;i<arr.length;i++){
            sorted.push(sort.remove());
        }
        return sorted;
    }
}

const heap = new minHeap();

heap.add(7);
heap.add(3);
heap.add(0);
heap.add(10);
heap.remove()

console.log(heap);

console.log(heap.heapSort([10,37,0,1,9,]))