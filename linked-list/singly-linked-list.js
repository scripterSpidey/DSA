class Node {

    constructor(value,next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {

    constructor(){
        this.head = null;
        this.size = 0;
    }

    getSize(){
        return this.size;
    }

    // "insert first";
    prepend(value){
        const node = new Node(value,this.head);
        this.head = node;
        this.size++;
    }

    // "get the values";
    getValue(){
        let current = this.head;
        while(current){
            // console.log(current)
            console.log(current.value);
            current = current.next;
        }
    }

    // "insert last";
    append(value){
        const node = new Node(value);
        
        if(!this.head){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // "insert anywhere";
    insertAt(value,index){
        if(index< 0 || index>= this.size) return;

        if(index == 0){
            this.head = new Node(value,this.head);
            this.size++;
            return;
        }

        const node = new Node(value);
        let count = 0;
        let prevNode;
        let currentNode= this.head;
        while(count<index){
            prevNode = currentNode;
            currentNode = currentNode.next;
            count++;
        }
        node.next = currentNode;
        prevNode.next = node;
        this.size++;
    }

    //get values at..............
    getValueAt(index){
        if(index< 0 || index>= this.size) return ;
        let currentNode = this.head;
        let position = 0;
        while(position<index){
            currentNode = currentNode.next;
            position++;
        }
        console.log(`node  at ${index}`,currentNode);
    };

    // Remove value at index X
    removeValueAt(index){
        if(index< 0 || index>= this.size || !index){
            console.log('out of range')
            return;
        } 
        let currentNode = this.head;
        let position = 0;
        if(index == 0){
             this.head = currentNode.next;
             this.size--;
        }else{
            let prevIndex;
            while(position < index){
                prevIndex = currentNode;
                currentNode = currentNode.next;
                position++;
            }
            prevIndex.next = currentNode.next;
            this.size --;
        } 
    }

    //delete all data from the list
    clearList(){
        this.head = null;
        this.size = 0;
    }

    //get first element of the list
    getFirst(){
        if(!this.head){
            console.log('List is empty');
            return;
        }
        console.log('first node value: ',this.head.value)
    }

    //get last element of the list
    getLast(){
        if(!this.head){
            console.log('List is empty');
            return;
        }
        let currentNode =  this.head;
        let position = 0;
        while(position<this.size-1){
            currentNode = currentNode.next;
            position++;
        }
        console.log('Last node value: ',currentNode.value)
    }

    //Replace element of the list at index X
    replaceAt(index,value){
        if(index< 0 || index >= this.size){
            console.log('Out of range');
            return;
        }
        let currentNode = this.head;
        let position = 0;
        while(position< index){
            currentNode = currentNode.next;
            position++;
        }
        currentNode.value = value;
    }

    //Remove  the specified elment
    removeValue(value){
        if(!this.head){
            console.log('List is empty');
            return;
        }
        let currentNode = this.head;
        if(currentNode.value == value){
            this.head = currentNode.next;
            this.size--;
            return;
        }
        let prevNode;
        while(currentNode){
            prevNode = currentNode;
            currentNode = currentNode.next;
            if( currentNode?.value == value){
                prevNode.next = currentNode.next;
                this.size--;
                return;
            }
        }
        console.log('Value can not be found')
    }
    
    //Find the value and return its index
    findValue(value){
        if(!this.head){
            console.log('List is empty');
            return;
        }
        let currentNode = this.head;
        let position = 0;
        while(currentNode){
            if(currentNode?.value == value){
                console.log(`${value} is at index ${position}`);
                return;
            }else{
                currentNode = currentNode.next;
                position++
            }
        }
        console.log('Value doesnot exist');
    }

    //Reverse the list;
    reverse(){
        if(!this.head){
            console.log("List is empty");
            return;
        }
        let currentNode = this.head;
        let prevNode= null;
        while(currentNode){
            let tempNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = tempNode; 
        }
        this.head = prevNode;
    }
}

const l1 = new LinkedList();
const l2 = new LinkedList();

l1.append(2);
l1.append(4);
l1.append(3);
l2.append(5);
l2.append(6);
l2.append(4);

let l1Head = l1.head;
let l2Head = l2.head;
console.log('l1head: ',l1Head.value)

let l1Val = '';
let l2Val = '';
while(l1Head){
    l1Val += l1Head.value;
    l1Head= l1Head.next;
}
while(l2Head){
    l2Val +=l2Head.value;
    l2Head = l2Head.next;
}
console.log(l1Val,l2Val)
let newVal = parseInt(l1Val)+parseInt(l2Val);
console.log(newVal)
let rev =newVal.toString().split('').reverse();
console.log(rev)
let reversed = new Node(rev[0]);
console.log(reversed)
let y = reversed
for(let i=1;i<rev.length;i++){
    let x = new Node(rev[i]);
    y.next = x;
    y = reversed.next;
}
console.log(reversed)










