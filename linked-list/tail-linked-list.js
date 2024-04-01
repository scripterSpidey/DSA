class Node {
    constructor(value,next=null){
        this.value = value;
        this.next = next;
    }
}

class TailLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    prepend(value){
        let node = new Node(value,this.head);
        if(this.size == 0){
            this.tail = node;
            this.head = node;
        }
        this.head = node;
        this.size++;
    }

    append(value){
        let node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            let lastNode = this.tail;
        lastNode.next = node;
        this.tail = node;
        }
        this.size++;
    }

    getValues(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    insertAt(value,index){
        if(index<0 || index>=this.size){
            console.log('Index is out of range');
            return;
        }
        let node = new Node(value);
        if(index==0){
            node.next = this.head;
            this.head = node;
            return;
        }else if(index==this.size-1){
           
           this.tail.next = node;
           this.tail = node;
           this.size++;
           return;
        }
        
        let currentNode = this.head;
        let prevNode;
        let position = 0;
        while(position<index){
            prevNode = currentNode;
            currentNode = currentNode.next;
            position++;
        }
        prevNode.next = node;
        node.next = currentNode;
        this.size++;
    }

    removeFromEnd(){
        if(!this.head){
            console.log('List is empty');
            return;
        }
        let nodeToRemove = this.tail;
        if(this.size ==1){
            this.head = null;
            this.tail = null;
            return;
        }
        let currentNode = this.head;
        let prevNode;
        while(currentNode.next != this.tail){
            currentNode=currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
        this.size--;
    }
}

const list2 = new TailLinkedList();
console.log(list2);

list2.append(6);
list2.prepend(4);
list2.prepend(5);
list2.insertAt(9,2);
list2.removeFromEnd();
list2.getValues();
console.log(list2);