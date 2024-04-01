

class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    #hash(key){
        let intValue = 0;
        for(let i=0;i<key.length;i++){
            intValue = intValue + key.charCodeAt(i);
        }
        return intValue % this.size;
    }

    set(key,value){
        let index = this.#hash(key);
        let bucket = this.table[index];
        if(bucket){
            let sameKey = bucket.find(item => item[0] ===key);
            if(sameKey) sameKey[1] = value;
            else bucket.push([key,value]);
        }else{
            this.table[index] = [[key,value]]
        }
    }

    get(key){
        let index = this.#hash(key);
        let bucket = this.table[index];
        if(bucket){
            let sameKey = bucket.find(item=> item[0] === key);
            if(sameKey) return sameKey[1];
            else return false;
        }else{
            console.log('This key doesnot exist!');
            return false;
        }
    }

    remove(key){
        let index = this.#hash(key);
        let bucket = this.table[index];
        if(bucket){
            let sameKey = bucket.find(item => item[0] === key);
            if(sameKey) bucket.splice(bucket.indexOf(sameKey),1)
            else return false;
        }else{
            console.log('This key doesnot exist');
        }
    }
}

const hashTable = new HashTable(10);
hashTable.set('name','ahmed');
hashTable.set('mane','zed');
hashTable.set('name','zuliakh');
console.log(hashTable.get('mane'));
console.log(hashTable.table)
hashTable.remove('mane')
console.log(hashTable.table);

