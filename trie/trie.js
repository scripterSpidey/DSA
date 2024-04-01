class TrieNode{
    constructor(){
        this.children ={};
        this.end = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    add(word){
        let current = this.root;
        for(let i=0;i<word.length;i++){
            let char = word[i];
            if(!current.children[char]){
                current.children[char] = new TrieNode();
            }
            current = current.children[char]
        }
        current.end = true;
    }

    prefix(word){
        let current = this.root;
        for(let i=0;i<word.length;i++){
            let char = word[i];
            if(!current.children[char]) return false;
            current = current.children[char];
        }
        return true;
    }

    autoComplete(word){
        let current = this.root;
        let words = ''
        for(let i=0;i<word.length;i++){
            let char = word[i]
            words+=char;
            if(!current.children[char]) return [false];
            current = current.children[char];
        }
        let similarWords = [];
        this.#autoCompleteHelper(words,similarWords,current);
        return similarWords;

    }

    #autoCompleteHelper(words,similarWords,current){
        if(current.end) similarWords.push(words);
        if(Object.keys(current.children).length){
            for(const key in current.children){
                this.#autoCompleteHelper(words+key,similarWords,current.children[key])
            }
        }
        return ;
    }

    longestCommonPrefix(){
        let curr = this.root;
        let longest = ''
        while(curr.children.size==1){
            let next;
            for(const [key,node] of curr.children){
                longest+=key;
                next = key;
            }
            curr = curr.children[next]
        }
        return longest;
    }
}

const trie = new Trie();
const similarWords = ['apple', 'apricot', 'ape', 'approach', 'aptitude', 'application', 'apparel', 'appliance', 'apostle', 'appendix'];
for (const word of similarWords){
    trie.add(word)
}
trie.add('Apple');
console.log(trie.prefix(''))
console.log(trie);
console.log(trie.autoComplete(''))
