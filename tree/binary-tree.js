class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
        this.nonBST = null;
    }

    add(value){
        const node = new TreeNode(value);
        if(!this.root){
            this.root = node;
        }else{
            let curr = this.root;
            this.#insertNode(curr,node);
        }
    }

    #insertNode(curr,node){
        if(node.value<curr.value){
            if(curr.left ==null){
                curr.left = node;
            }else{
                this.#insertNode(curr.left,node)
            }
        }else{
            if(curr.right===null){
                curr.right = node;
            }else{
                this.#insertNode(curr.right,node)
            }
        }
    }

    remove(value){
        if(!this.root) return false;
        let curr = this.root;
        this.root = this.#removeHelper(curr,value)
    }

    #removeHelper(curr,value){
        if(!curr) return;
        if(curr.value>value){
            curr.left =  this.#removeHelper(curr.left,value)
        }else if(curr.value<value){
            curr.right =  this.#removeHelper(curr.right,value)
        }else if(curr.value == value){
            if(!curr.left && !curr.right){
                return null;
            }else if(!curr.left){
                return curr.right
            }else if(!curr.right){
                return curr.left
            }
            let min = this.min(curr.right);
            console.log('min',min)
            curr.value = min;
            curr.right = this.#removeHelper(curr.right,min);
        }
        return curr;
    }

    min(root=this.root){
        while(root.left){
            root=root.left
        }
        return root.value;
    }

    max(root=this.root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    levelOrder(){
        if(!this.root) return ;
        let que = [];
        que.push(this.root);
        while(que.length){
            let curr = que.shift();
            console.log(curr.value);
            if(curr.left){
                que.push(curr.left)
            }
            if(curr.right){
                que.push(curr.right)
            }
        }
    }

    preOrder(root=this.root){
        if(!root) return;
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }

    inOrder(root= this.root){
        if(!root) return ;
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right);
    }

    postOrder(node = this.root){
        if(!node) return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value)
    }

    validate(node=this.root,min,max){
        if(!node) return true;
        if(node.value < min || node.value > max) return false;
        let left = this.validate(node.left,node.value,max);
        let right = this.validate(node.right,min,node.value);
        return (left && right);
    }

    closest(value,node= this.root){
        if(!node) return false;
        if(value<node.value){
            return this.closest(value,node.left)
        }else if(value>node.value){
            return this.closest(value,node.right)
        }
        if(value == node.value){
           if(!node.left && !node.right){
            return false
           }else if(!node.left){
            return node.right.value;
           }else if(!node.right){
            return node.left.value;
           }
           let left = node.left.value;
           let right = node.right.value;
           return  Math.abs(value-left) < Math.abs(value-right) ? left : right;
        }
    }
}

const bst = new BST();
bst.add(30);
bst.add(90);
bst.add(5);
bst.add(60);
bst.inOrder()
console.log(bst.max())

