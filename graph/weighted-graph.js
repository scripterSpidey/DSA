class Graph{
    constructor(){
        this.graph = {};
    }

    addVertex(vertex){
        if(!this.graph[vertex]){
            this.graph[vertex]={}
        }
    }

    addEdge(vertex1,vertex2,weight){
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.graph[vertex1][vertex2] = weight;
        this.graph[vertex2][vertex1] = weight;
    }
}

const graph = new Graph();
graph.addVertex('Mumbai');
graph.addVertex('China');
graph.addVertex('Oman')
graph.addEdge('Qatar','Kochi','3000KM')
console.log(graph)