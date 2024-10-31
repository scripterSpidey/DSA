const log = console.log

"Adjacency matrix representation"
// let the graph A-B-C

const matrix = [
    [0, 1, 0],  //represent vertix A. [A!-A, A-B, A!-C]
    [1, 0, 1],//vertix B. [B-A, B!-B, B-C]
    [0, 1, 0] // vertix C. [c!-A, C-B, C!-C]
];

"Adjacency list representation";

const list = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['B']
}

class Graph {
    constructor() {
        this.list = {}
    }

    addVertex(vertex) {
        if (!this.list[vertex]) {
            this.list[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.list[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.list[vertex2]) {
            this.addVertex(vertex2);
        }
        this.list[vertex1].add(vertex2);
        this.list[vertex2].add(vertex1);
    }

    display() {
        for (const vertex in this.list) {
            console.log(vertex + '=>' + [...this.list[vertex]])
        }
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.list[vertex1].has(vertex2) &&
            this.list[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1, vertex2) {
        this.list[vertex1].delete(vertex2);
        this.list[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (this.list[vertex]) {
            for (const edge of this.list[vertex]) {
                this.removeEdge(vertex, edge);
            }
            delete this.list[vertex];
            return true;
        } else {
            return false;
        }
    }

    bfs(start) {
        let queue = [start];
        let visited = new Set();
        visited.add(start)
        while (queue.length) {
            let node = queue.shift();
            console.log(node);
            const nodes = this.list[node];
            for (const node of nodes) {
                if (!visited.has(node)) {
                    visited.add(node);
                    queue.push(node);
                }
            }
        }
    }

    dfs(start, visited = new Set()) {
        visited.add(start)
        console.log(start);
        let nodes = this.list[start];
        for (const node of nodes) {
            if (!visited.has(node)) {
                this.dfs(node, visited)
            }
        }
    }

}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E')
graph.addEdge('E', 'F');
graph.addEdge('F', 'A')
graph.display();
graph.bfs('A');
console.log('dfs');
graph.dfs('A')



