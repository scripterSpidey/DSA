class Node {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node;
            this.tail = node;
            node.next = node;
            node.prev = node;
        }else{
            this.tail.next = node;
            node.next= this.head;
            this.head.prev = node;
            node.prev = this.tail;
            this.tail  = node;
        }
    }

    print(){
        if(!this.head) return;
        let current = this.head;
        let values = [current.value];
        current = current.next;
        while(current!=this.head){
            values.push(current.value)
            current =current.next;
        }
        return values;
    }

    reversePrint(){
        if(!this.head) return;
        let current = this.tail;
        let values = [current.value];
        current = current.prev;
        while(current!=this.tail){
            values.push(current.value);
            current = current.prev
        }
        return values;
    }

}

const list = new CircularLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(10)
console.log(list.print())
console.log(list.reversePrint())
// console.log(list)