
// (hashKey + probing value) % table size
class HashTable {
    constructor(limit) {
        this.bucket = new Array(limit).fill(null);
        this.limit = limit;
        this.size = 0;
    }

    hashKey(key) {
        return (String(key).length % this.limit);
    }


    set(key, value) {
        if (this.size === this.limit) return;
        const index = this.hashKey(key);
        let i = 0;
        while (this.bucket[(index + i) % this.limit] !== null) {
            i++;
        }
        this.bucket[(index + i) % this.limit] = [key, value];
        this.size++;
    }

    get(key) {
        const index = this.hashKey(key);
        console.log(index)
        let i = 0;
        while (this.bucket[(index + i) % this.limit] !== null) {
            if (this.bucket[(index + i) % this.limit][0] === key) {
                return this.bucket[(index + i) % this.limit][1]
            }
            i++
        }
    }
}

const table = new HashTable(3);

table.set('ahmed', 'zulaikh');
table.set('zed', 'ego');
table.set('ok', 'yea');
console.log(table.get('ok'))


console.log(table.bucket)