
class Graph {
    constructor() {
        this.graph = {};
    }

    add(vertex) {
        if (!this.graph[vertex]) {
            this.graph[vertex] = new Set();
        }
    }

    addEdge(v1, v2) {
        this.add(v1);
        this.add(v2);
        this.graph[v1].add(v2);
        // this.graph[v2].add(v1);
    }

    dfs(start) {
        const visited = new Set();
        const stack = [start];
        while (stack.length) {
            const vertex = stack.pop();
            console.log(vertex)
            for (const node of this.graph[vertex]) {
                if (!visited.has(node)) {
                    visited.add(node);
                    stack.push(node);
                }
            }
        }
    }

    cyclic() {
        const vertexes = Object.keys(this.graph);
        for (const vertex of vertexes) {
            if (this.cyclicUtil(vertex)) return true;
        }
        return false;
    }

    cyclicUtil(start, visited = new Set(), recStack = new Set()) {
        if (!visited.has(start)) {
            visited.add(start);
            recStack.add(start);
            for (const node of this.graph[start]) {
                // if (!visited.has(node)) {
                if (!visited.has(node) && this.cyclicUtil(node, visited, recStack)) {
                    return true;
                } else if (recStack.has(node)) {
                    return true;
                }
                // }
            }
            recStack.delete(start);
        }
        return false;

    }
}

const graph = new Graph();
graph.addEdge('A', 'B')
graph.addEdge('A', 'D')
graph.addEdge('A', 'C')
graph.addEdge('C', 'E')
graph.addEdge('E', 'B')
graph.addEdge('D', 'E')
graph.addEdge('D', 'B');
// graph.addEdge('E', 'A')
graph.dfs('A')
console.log(graph);
console.log(graph.cyclic())
// graph.cyclicUtil("A")