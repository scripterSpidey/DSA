const log = console.log
class MaxHeap{
    constructor(){
        this.heap = [];
    }

    heapify(arr,len=arr.length,i){
        let largest = i;
        let left = 2*i+1;
        let right = 2*i+2;
        if(left<len && arr[left]>arr[largest]){
            largest = left;
        }
        if(right<len && arr[right]>arr[largest]){
            largest = right;
        }
        if(i!=largest){
            [arr[i],arr[largest]] = [arr[largest],arr[i]];
            this.heapify(arr,len,largest);
        }
    }
    

    toMaxHeap(arr){
        let heap = [...arr];
        for(let i=Math.floor(arr.length/2)-1;i>=0;i--){//we start heapifying from last non lead node and do it up;
            this.heapify(heap,heap.length,i);
        }
        return heap;
    }

    parentOf(value){
        if(this.heap.length == 0) return false;
        let index = this.heap.indexOf(value);
        if(index == -1) return false;
        return (this.heap[Math.floor((index-1)/2)])
    }

    leftChild(value){
        if(this.heap.length == 0) return false;
        let index = this.heap.indexOf(value);
        if(index == -1) return false;
        return (this.heap[2*index+1])
    }

    rightChild(value){
        if(this.heap.length == 0) return false;
        let index = this.heap.indexOf(value);
        if(index == -1) return false;
        return (this.heap[2*i+2]);
    }

    isLeaf(value){
        if(this.heap.length == 0) return false;
        let index = this.heap.indexOf(value);
        if(index == -1 ) return false;
        return index> this.heap.lenght/2 && index < this.heap.length-1;
    }

    insert(value){
        this.heap.push(value);
        if(this.heap.length>1){
            let curr = this.heap.length-1;
            while(curr>=0){
                let parent = Math.floor((curr-1)/2);
                if(this.heap[curr]>this.heap[parent]){
                    [this.heap[parent],this.heap[curr]] = [this.heap[curr],this.heap[parent]];
                    curr = parent;
                }else{
                    break;
                }
            }
        }
    }

    remove(){
        if(this.heap.length == 0) return false;
        if(this.heap.length==1){
            this.heap.pop();
        }else{
            let len = this.heap.length;
            
            [this.heap[0],this.heap[len-1]] = [this.heap[len-1],this.heap[0]];
            this.heap.pop();
            let curr = 0;
            while(curr< len){
                let leftChild = 2*curr+1;
                let rightChild = 2*curr+2;
                let maxChild = this.heap[leftChild]>this.heap[rightChild] ? leftChild : rightChild;
                if(this.heap[maxChild]>this.heap[curr]){
                    [this.heap[curr],this.heap[maxChild]] = [this.heap[maxChild],this.heap[curr]];
                    curr = maxChild;
                }else{
                    break;
                }
            }
        } 

    }
}

const maxHeap = new MaxHeap();
maxHeap.insert(5);
maxHeap.insert(10);
maxHeap.insert(100);
maxHeap.insert(15);
maxHeap.insert(8);
maxHeap.insert(1);
maxHeap.insert(200);
log(maxHeap.parentOf(10));
log(maxHeap.leftChild(15));
log(maxHeap)
maxHeap.remove()
log(maxHeap);

log('class: ',maxHeap.toMaxHeap([3, 5, 1, 4, 2]))
log(createHeap([3, 5, 1, 4, 2]))
function createHeap(array){
    let heap = [...array];
    for(let i = Math.floor(heap.length/2);i>=0;i--){
        heapify(heap,i,heap.length)
    }
    return heap;
}

function heapify(array,i,len){
    largest = i;
    left = 2*i+1;
    right = 2*i+2;
    if(left<len && array[left] > array[largest]){
        largest = left;
    }
    if(right<len && array[right]>array[largest]){
        largest = right;
    }
    if(largest != i){
        [array[i],array[largest]] = [array[largest],array[i]];
        heapify(array,largest,len)
    }
}

