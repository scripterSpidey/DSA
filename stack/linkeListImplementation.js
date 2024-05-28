const { checkPrime } = require("crypto");

class Node{
    constructor(value){
        this.value = value;
        this.next= null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }

    push(value){
        if(this.top && this.top.value==value) return;
        const newNode = new Node(value);
        this.deleteNode(value);
        let currNode = this.top;
        this.top = newNode;
        newNode.next = currNode;
    }

    deleteNode(value){
        if(!this.top || this.top.value==value) return;
        let currentNode = this.top;
        let prevNode;
        while(currentNode.next){
            prevNode = currentNode;
            currentNode= currentNode.next;
            if(currentNode.value==value){
                prevNode.next = currentNode.next;
            }
        }
    }
    
    print(){
        if(!this.top) return;
        let current = this.top;
        let values = []
        while(current){
            values.push(current.value);
            current=current.next;
        }
        return values;
    }
}

const stack = new Stack();
stack.push(6);
stack.push(9);
stack.push(7);
stack.push(10);
stack.push(6);
stack.push(16);
stack.push(10);
stack.push(9);
console.log(stack.print())