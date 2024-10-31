function stackSort(array){
    const tempStack = [];
    while(array.length){
        let temp = array.pop();
        while(tempStack.length && tempStack[tempStack.length-1]>temp){
            array.push(tempStack.pop())
        }
        tempStack.push(temp)
    }
    return tempStack;
}

const sortedArray = stackSort([3,19,6,1,6]);

console.log(sortedArray)


const array = [34, 3, 31, 98, 92, 23];

function sortUsingStack(array){
    let sortedStack = []
    let tempStack = []
    array.forEach(num=>{
        while(sortedStack.length && num<sortedStack[sortedStack.length-1]){
            tempStack.push(sortedStack.pop())
        }
        sortedStack.push(num);
        while(tempStack.length){
            sortedStack.push(tempStack.pop())
        }
    })
    return sortedStack;
}

console.log(sortUsingStack(array))