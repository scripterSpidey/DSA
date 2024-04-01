class CircularQueue{
    constructor(capcity){
        this.capcity = capcity;
        this.items = {};
        this.front = -1;
        this.rear = -1;
        this.size  = 0;
    }
    isFull(){
        return this.capcity==this.size;
    }
    isEmpty(){
        return this.size == 0;
    }
    enQueue(element){
        if(!this.isFull()){
            this.rear = (this.rear +1) % this.capcity;
            this.items[this.rear] = element;
            if(this.isEmpty()) this.front = this.rear;
            this.size++;
        }else{
            console.error('Queue is full')
        }
    }

    deQueue(){
        if(!this.isEmpty()){
            delete this.items[this.front]
            this.front = (this.front +1) % this.capcity;
            this.size--;
            if(this.isEmpty()){
                this.front = -1;
                this.rear = -1;
            }
        }else{
            console.log('Queue is empty!')
        }
    }

    peek(){
        console.log(this.items[this.front])
    }

    print(){
        for(let i =this.front; i<=this.rear;i++){
            console.log(this.items[i])
        }
    }
}

const queue = new CircularQueue(5);

queue.enQueue(5);
queue.enQueue(1);
queue.enQueue(1);
queue.enQueue(1);
queue.enQueue(1);


// queue.peek()
queue.print()

console.log(queue);


