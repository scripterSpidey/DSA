class Node{
   constructor(value,prev=null,next=null){
        this.value = value;
        this.next = next;
        this.prev = prev;
   }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(value){
        const node = new Node(value,null,this.head);
        let currentNode = this.head;
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.head = node;
            currentNode.prev = node;
        }
        this.size++;
    }

    append(value){
        const node = new Node(value,this.tail,null)
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            let temp = this.tail;
            this.tail = node;
            temp.next = node;
        }
        this.size++;
    }

    insertAt(index,value){
        if(index<0 || index>this.size){
            console.log("Out of range ");
            return;
        }
        if(!this.head){
            console.log("List is empty");
            return;
        }else{
            const node = new Node(value);
            let currentNode = this.head;
            if(index == 0){
                currentNode.prev = node;
                node.next = currentNode;
                this.head = node;
            }else if(index == this.size){
                let lastNode = this.tail;
                lastNode.next = node;
                node.prev = lastNode;
                this.tail = node;
            }else{
                let count = 0;
                let prevNode;
                while(index>count){
                    prevNode= currentNode;
                    currentNode = currentNode.next;
                    count++;
                }
                prevNode.next = node;
                node.prev = prevNode;
                node.next = currentNode;
                currentNode.prev = node;
            }
            this.size++;
        }
    }

    getValues(){
        if(!this.head){
            console.log('List is empty');
            return;
        }
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    reverse(){
        if(!this.head){
            console.log('List is empty');
            return;
        }
        let currentNode = this.tail;
        while(currentNode !== null){
            let prevNode = currentNode.prev;
            currentNode.prev = currentNode.next;
            currentNode.next = prevNode;
            currentNode = prevNode;
        }
        let tail = this.tail;
        this.tail = this.head; 
        this.head = tail;
    }

    fromArray(array){
        for(const value of array){
            this.append(value);
        }
    }

    removeDuplicates(){
        if(!this.head){
            console.log('List is empty');
            return;
        }
        let uniqueSet = new Set();
        let currentNode = this.head;
        let prevNode;
        while(currentNode){
            if(!uniqueSet.has(currentNode.value)){
                uniqueSet.add(currentNode.value);
            }else{
                let prevNode = currentNode.prev;
                let nextNode = currentNode.next;
                if(prevNode){
                    prevNode.next = nextNode;
                }else{
                    this.head = nextNode;
                }
                if(nextNode){
                    nextNode.prev = prevNode;
                }else{
                    this.tail = prevNode;
                }
                this.size--;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        
    }
}

const Dlist = new DoublyLinkedList();


Dlist.prepend(2);
Dlist.prepend(1);
Dlist.append(3);
Dlist.append(4);
Dlist.insertAt(4,5);
Dlist.insertAt(0,0);
Dlist.insertAt(5,8)
Dlist.getValues();
Dlist.reverse() 

console.log(Dlist)
Dlist.getValues(); 

//converting array to linked list.............

const arrayToList = new DoublyLinkedList();
let array = [0,1,2,3,4,5]
console.log(arrayToList);
arrayToList.fromArray(array);
// console.log(arrayToList);

//removing duplicates..............

const duplicateList = new DoublyLinkedList();
let dupArr = [1,1,3,3,22,5,6,3,0,0,1,1];
duplicateList.fromArray(dupArr);
duplicateList.getValues();
console.log(duplicateList);
duplicateList.removeDuplicates();
console.log(duplicateList);
duplicateList.getValues();



