var sumOfDistancesInTree = function(n, edges) {
    if(!edges.length) return [0];
    class Graph{
        constructor(){
            this.nodes = new Map();
        }

        addNode(node){
            if(!this.nodes.has(node)){
                this.nodes.set(node,new Set());
            }
        }

        addEdge(edge){
            if(!this.nodes.has(edge[0])){
                this.addNode(edge[0])
            }
            if(!this.nodes.has(edge[1])){
                this.addNode(edge[1])
            }
            this.nodes.get(edge[0]).add(edge[1]);
            this.nodes.get(edge[1]).add(edge[0]);
        }
    }

    const tree = new Graph();

    edges.forEach(edge=>{
        tree.addEdge(edge);
    })

    console.log(tree.nodes);
    
    function distance(node){
        // console.log(node)
        let visited = new Set();
        let length= 0;
        dfsSearch(node,0);
        function dfsSearch(node,len){
            if(visited.has(node)){
                len--;
                length+=len;
                console.log(`${node} already visited len is ${len}`)
                return;
            }
            visited.add(node);
            const connectedNodes = tree.nodes.get(node);
            console.log(`nodes of ${node}`,connectedNodes,`len is ${len}`)
            for(const nodeX of connectedNodes){
                dfsSearch(nodeX,len+1)
            }
        }
        // console.log('length',length)
        console.log('search completed with length ',length)
        return length;
    };
    const distances = Array.from({length:n},(_,index)=>{
        
        return distance(index);
    })
    console.log(distances)
    return distances;
};

sumOfDistancesInTree(6,[[0,1],[0,2],[2,3],[2,4],[2,5]])