class Routes{
    constructor(){
        this.connections = new Map();
    }

    addAirport(airport){
        if(!this.connections.has(airport)){
            this.connections.set(airport,new Set());
        }
    }

    addRoute(airport1,airport2){
        if(!this.connections.has(airport1)){
            this.addAirport(airport1);
        }
        if(!this.connections.has(airport2)){
            this.addAirport(airport2)
        }
        this.connections.get(airport1).add(airport2);
        this.connections.get(airport2).add(airport1);
    }

    hasConnection(airport1,airport2){
        return this.connections.has(airport1) && this.connections.get(airport1).has(airport2)
    }

    bfs(start,end){
        const queue= [];
        const visited = new Set();
        queue.push(start);
        visited.add(start);
        while(queue.length){
            const airport = queue.shift();
            const destinations = this.connections.get(airport);
            for(const destination of destinations){
                if(destination==end){
                    console.log('Reached at: ' + destination);
                }
                if(!visited.has(destination)){
                    visited.add(destination);
                    queue.push(destination);
                }
            }
        }
    }

    dfs(start,end,visited= new Set()){
        console.log(start);
        visited.add(start);
        const destinations = this.connections.get(start)
        for(const destination of destinations ){
            if(destination == end){
                console.log('You have reached at:',end);
                return ;
            }
            if(!visited.has(destination)){
                this.dfs(destination,end,visited,)
            }
        }
    }
}

const routes = [
    ['Mumbai', 'Delhi'],
    ['Bangalore', 'Chennai'],
    ['Kolkata', 'Pune'],
    ['Hyderabad', 'Ahmedabad'],
    ['Jaipur', 'Surat'],
    ['Mumbai', 'Ahmedabad'],
    ['Ahmedabad', 'Kolkata'],
    ['Jaipur', 'Delhi'],
    ['Delhi', 'Pune'],
    ['Chennai','Mumbai']
]

const planeRoutes = new Routes();
// planeRoutes.addAirport('Kochi');
// planeRoutes.addRoute('Kochi','Qatar')

routes.forEach(route=>{
    planeRoutes.addRoute(...route);
});

console.log(planeRoutes);
console.log(planeRoutes.hasConnection('Kochi','Qatar'));
// planeRoutes.bfs('Mumbai','Surat');
planeRoutes.dfs('Mumbai','Kolkata')
