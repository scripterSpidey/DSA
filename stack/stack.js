"Last in first out data structure"
"It is a list. Its behaviour is what defines a stack"
"applications: browser back button, undo button, call stack";

class Stack{
    constructor(){
        this.items = [];
        this.count = 0;
    }

    push(item){
        this.items[this.count] = item;
        this.count++;
    }

    pull(){
        this.items.pop();
        this.count -= 1;
    }
    peek(){
        if(this.count == 0) return console.log('Stack is empty')
        console.log(this.items[this.count-1])
    }
    clear(){
        this.items = [];
        this.count = 0;
    }

    size(){
        console.log(this.count)
    }
    print(){
        console.log(this.items)
    }
}

const stack = new Stack();
stack.push(5);
stack.push('ahammed');
stack.push(true);
stack.pull();
// stack.clear();
stack.print();
stack.peek();
stack.size()
console.log(stack);