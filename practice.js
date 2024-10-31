
class Node{
    constructor(){
        this.children = {}
        this.end = false
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }
    
    add(word){
        let current = this.root;
        for(const letter of word){
            if(!current.children[letter]){
                current.children[letter] = new Node();
            }
            current = current.children[letter];
        }
        current.end = true;
    }
    
    search(word){
        let current = this.root;
        for(const letter of word){
            if(!current.children[letter]) return false;
            current = current.children[letter]
        }
        return true;
    }

    autoComplete(word){
        let words = '';
        let current = this.root;
        for(const letter of word){
            words+=letter;
            if(!current.children[letter]) return [];
            current = current.children[letter];
        }
        const allWords = [];
        this.autoCompleteHelper(words,current,allWords);
        return allWords;
    }

    autoCompleteHelper(word,current,allWords){
        if(current.end) allWords.push(word);
        for(const char in current.children){
            this.autoCompleteHelper(word+char,current.children[char],allWords)
        }
        return;
    }


}

// const trie = new Trie();
// trie.add('ahmed');
// trie.add('apple');
// console.log(trie.search('ahmed'))
// console.log(trie.autoComplete('a'))

class ListNode{
    constructor(val,next=null){
        this.val = val;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    append(val){
        const node = new ListNode(val)
        if(!this.head){
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node;
        }
    }

    getValues(){
        const values = [];
        if(!this.head) return values;
        let curr =this.head;
        while(curr){
            values.push(curr.val)
            curr = curr.next
        }
        return values;
    }

    delete(val){
        if(!this.head) return;
        let curr =this.head;
        let prev;
        while(curr && curr.val!==val){
            prev = curr;
            curr = curr.next;
        }
        if(!curr) return
        prev.next = curr.next;
    }

    deleteDuplicates(){
        if(!this.head) return ;
        let curr = this.head;
        while(curr){
            let runner = curr;
            while(runner.next){
                if(runner.next.val===curr.val){
                    runner.next = runner.next.next;
                }else{
                    runner = runner.next;
                }
            }
            curr = curr.next;
        }
    }

    removeDuplicatesFast(){
        if(!this.head) return 
        const set = new Set();
        let curr = this.head;
        set.add(curr.val)
        while(curr.next){
            if(set.has(curr.next.val)){
                curr.next = curr.next.next
            }else{
                set.add(curr.next.val);
                curr = curr.next;
            }
        }
    }
}
const list = new LinkedList()
const numbers = [2,1,2,9,0,2,2];
numbers.forEach(num=>list.append(num));

list.delete(67)
// list.deleteDuplicates()
list.removeDuplicatesFast()
console.log(list.getValues());
