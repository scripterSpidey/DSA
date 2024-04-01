class Graph{
    constructor(){
        this.graph = {}
    }

    addVertex(vertex){
        if(!this.graph[vertex]){
            this.graph[vertex] = new Set();
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.graph[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.graph[vertex2]){
            this.addVertex(vertex2)
        }
        this.graph[vertex1].add(vertex2);
        this.graph[vertex2].add(vertex1);
    }

    removeEdge(vertex1,vertex2){
        this.graph[vertex1].delete(vertex2);
        this.graph[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.graph[vertex]) return false;
        for(const value of this.graph[vertex]){
            this.removeEdge(value,vertex)
        }
    }

    bfs(start){
        let que = [start];
        let visited = new Set();
        visited.add(start)
        while(que.length){
            let vertex = que.shift();
            console.log(vertex);
            for(const place of this.graph[vertex]){
                if(!visited.has(place)){
                    visited.add(place);
                    que.push(place);
                }
            }
        }
    }
    dfs(start,visited = new Set()){
        visited.add(start);
        console.log(start);
        for(const vertex of this.graph[start]){
            if(!visited.has(vertex)){
                this.dfs(vertex,visited)
            }
        }
    }
}

const graph = new Graph();
graph.addVertex('Mumbai');
graph.addEdge('Kochi','Qatar');
graph.addVertex('Dubai');
graph.addEdge('Dubai','Qatar')
graph.addEdge('Mumbai','Delhi');
graph.addEdge('Mumbai','Kochi')

// graph.removeVertex('Qatar')
console.log(graph)
graph.bfs('Mumbai');
console.log('dfs......');
graph.dfs('Mumbai')