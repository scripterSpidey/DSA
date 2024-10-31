class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}


class Queue {
    constructor(limit) {
        this.head = null;
        this.tail = null;
        this.limit = limit;
        this.size = 0;
    }

    isEmpty() {
        return this.head === null;
    }

    isFull() {
        return this.limit === this.size;
    }

    enQue(value) {
        if (this.isFull()) return;
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.tail.next = this.head;
        this.size++;
    }

    deQue() {
        if (this.isEmpty()) return;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.tail.next = this.head;
        }
        this.size--;
    }

    checkCircular() {
        return this.tail.next === this.head;
    }
}


const q = new Queue(5);
const nums = [5, 7, 8, 1, 12, 4, 3, 7, 8, 0]
nums.forEach(num => q.enQue(num))
q.deQue()
console.log(q)