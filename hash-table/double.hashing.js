/**
 * Double hashing.
 * 
 * table index = (hashKey(1) + (probingValue * hashKey(2))) % tableSize 
 */


class HashTable {
    constructor(size) {
        this.bucket = new Array(size).fill(null);
        this.size = size;
    }

    hash1(key) {
        return String(key).length % this.size
    }

    hash2(key) {
        let index = 0;
        for (const char of key) {
            index += char.charCodeAt(0)
        }
        return index % this.size
    }

    set(key, val) {
        const hash1 = this.hash1(key);
        const hash2 = this.hash2(key);
        console.log(hash1, hash2)
        let i = 0;
        while (this.bucket[(hash1 + (i * hash2)) % this.size] !== null) {
            i++;
        }
        this.bucket[(hash1 + (i * hash2)) % this.size] = [key, val];
    }
}

const table = new HashTable(10);

table.set('ahmed', 'zulaikh');
table.set('demha', 'zed')
console.log(table.bucket)





