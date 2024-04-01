class HashEntry{
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(key,value){
        let node = new HashEntry(key,value);
        if(!this.head){
            this.head = node;
        } else{
            let current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = node;
        }
        this.size++;
    }
}

class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let intKey = 0;
        for(let i=0;i<key.length;i++){
            intKey = intKey + key.charCodeAt(i);
        }
        return intKey % this.size;
    }


    set(key,value){
        let index = this.hash(key);
  
        let bucket = this.table[index];
        if(!bucket){
            let list = new LinkedList();
            list.append(key,value);
            this.table[index] = list;
        }else{
            bucket.append(key,value);
        }
    }
}

const hashTable = new HashTable(10);
hashTable.set('name', 'ahmed');
hashTable.set('mane','zulaikh')
console.log(hashTable.table)


