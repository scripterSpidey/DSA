"Using linked list";

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class QueueLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enQueue(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            let end = this.tail;
            this.tail = node;
            node.prev = end;
            end.next = node;
        }
        this.size++;
    }

    deQueue(){
        if(!this.head){
            console.log('Queue is empty');
            return false;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
        }
    }

    peek(){
        if(!this.head){
            console.log('Queue is empty');
            return  false;
        }else{
            console.log(this.head.value);
            return this.head.value;
        }
    }

    last(){
        if(!this.head){
            console.log('List is empty');
            return false;
        }else{
            console.log(this.tail.value);
            return this.tail.value;
        }
    }
}

let listQueue = new QueueLinkedList();

listQueue.enQueue(4);
listQueue.enQueue(5);
listQueue.enQueue(6);
listQueue.deQueue();
listQueue.peek();
listQueue.last();
console.log(listQueue);