"Design a DS to perform insertion removal and generate random number"
"Duplicates are not allowed in the DS"
"Try to follow constant time operations."

class myDS{
    constructor(){
        this.values  = [];
        this.record = {}
    }

    insert(value){
        if(value in this.record){
            return false;
        } 
        this.values.push(value);
        this.record[value] = this.values.length-1; 
    }

    remove(value){
        if(!(value in this.record)){
            return false;
        } 
        let index = this.record[value];
        delete this.record[value];
        this.record[this.values[this.values.length-1]] = index;
        [this.values[index],this.values[this.values.length-1]] = [this.values[this.values.length-1],this.values[index]];
        this.values.pop();
    }

    random(){
        let index = Math.floor(Math.random()*(this.values.length));
        return this.values[index];
    }
}
const mine= new myDS();

mine.insert(4);
mine.insert(4);
mine.insert(5);
mine.insert(6);
mine.insert(7);
mine.insert(8);
mine.insert(9);
mine.insert(10);
mine.remove(9);
mine.remove(10)
console.log(mine.random())
                                                          
console.log(mine)