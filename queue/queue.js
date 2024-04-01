"Queue"
"First in firt out"

class Queue{
    constructor(){
        this.items = {};
        this.in = 0;
        this.out = 0;
    }   

    add(element){
        this.items[this.in] = element;
        this.in++;
    }

    remove(){
        let item = this.items[this.out]
        delete this.items[this.out];
        this.out++;
        return item;
    }

    peek(){
        console.log(this.items[this.out])
    }

    print(){
        console.log(this.items)
    }

    
}

const queue1 = new Queue();

queue1.add(1);
queue1.add(2);
queue1.add(3)
queue1.remove();
queue1.print()
queue1.peek()
console.log(queue1);




'reverse que';

class Queue{
    constructor(){
        this.items = [];
        this.size = 0;
    }

    enqueue(value){
        this.items.push(value);
        this.size++;
    }

    dequeue(){
        this.items.shift();
        this.size--;
    }

    reverse(start=0,end=this.size-1){
        if(start>=end) return;
        let temp = this.items[end];
        this.items[end] = this.items[start];
        this.items[start] = temp;
        start++;
        end--;
        return this.reverse(start,end)
    }
}

const queue = new Queue();
queue.enqueue(3);
queue.enqueue(7);
queue.enqueue(10);
queue.enqueue(4);
queue.enqueue(2);
queue.enqueue(0);
queue.enqueue(1);
queue.dequeue();
queue.reverse()
console.log(queue)