"623. Add One Row to Treee";

"Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth."

"Note that the root node is at depth 1."

"The adding rule is:"

"Given the integer depth, for each not null tree node cur at the depth depth - 1,"
" create two tree nodes with value val as cur's left subtree root and right subtree root."
"cur's original left subtree should be the left subtree of the new left subtree root."
"cur's original right subtree should be the right subtree of the new right subtree root."
"If depth == 1 that means there is no depth depth - 1 at all, then create a tree node with value val as the new root of the whole original tree,"
" and the original tree is the new root's left subtree."

//? "Answer is inside the class BinaryTree"

"___________________________________________________________________________________"
"Approach:"

    "One way I thought this problem was to replace the node value when i reach at the given depth"
    "which i accesed by dfs search. But there were some refference issues while changing the value. "
    "The second approach was to traverse upto the parent node of depth , i.e, if depth is 3,"
    "we will traverse until depth 2 and access all the left and right nodes at depth 2."
    "Now replace the left node of current node with a new Node with the given value. Also replace "
    "right node of current node with a new node having given value."
    "Now for the new Node we need to assign the rest of the node of original tree as its children"
    "We always fills the left side as much as possible in a tree. So left new node's left node will be"
    "the left node of previous tree, i.e before modification. also right new nodes left value will be "
    "right node of previous tree."


class TreeNode{
    constructor(value,left=null,right=null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    add(value){
        if(!this.root){
            this.root = new TreeNode(value)
        }else{
            let node = this.root;
            this.#addELement(node,value)
        }
    }

    #addELement(node,value){
        let que = [];
        que.push(node);
        while(que.length!=0){
            let lastNode = que.shift();
            if(lastNode.left==null){
                lastNode.left = new TreeNode(value);
                break;
            }else{
                que.push(lastNode.left);
            }
            if(lastNode.right==null){
                lastNode.right = new TreeNode(value);
                break;
            }else{
                que.push(lastNode.right)
            }
        }
    }

    insertAtDepth(depth,value){
        if(!this.root) return false;
        if(depth==1) return this.root = new TreeNode(value,this.root);
        this.#insert(this.root,1,depth,value);
    }

    #insert(node,height,depth,value){
        if(!node) return;
        if(height == depth- 1){
            node.left = new TreeNode(value,node.left,null);
            node.right = new TreeNode(value,node.right,null,);
            return;
        }else{
            this.#insert(node.left,height+1);
            this.#insert(node.right,height+1)
        }
       
    }
}

const tree = new BinaryTree();

tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);
tree.insertAtDepth(2,10)
console.log(tree.root); 



