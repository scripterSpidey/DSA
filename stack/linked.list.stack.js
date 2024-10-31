class Node{
    constructor(value,next=null){
        this.value = value;
        this.next = next;
    }
}

class Stack{
    constructor(){
        this.head =null;
    }

    add(value){
        const node = new Node(value,this.head);
        this.head = node;
    }

    pop(){
        if(!this.head) return 'stack is empty'
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    addUnique(value){
        const node = new Node(value,this.head);
        this.head = node;
        let current = this.head;
        
        while(current && current.next){
            if(current.next.value === value){
                current.next = current.next.next
            }
            current = current.next;
        }
    }

    print(){
        let current = this.head;
        const values = []
        while(current){
            values.push(current.value);
            current = current.next
        }
        console.log(values)
    }
}

const stack = new Stack();

stack.add(10);
stack.add(15);
stack.addUnique(10)
stack.addUnique(1)
stack.addUnique(1)
stack.add(1)
stack.add(1);
stack.addUnique(1)
stack.print() 
