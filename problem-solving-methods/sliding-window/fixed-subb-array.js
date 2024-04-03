function maxSubbArrSum(array,elementsCount){
    let curSum = 0;
    let maxSumSeen = - Infinity;
    for(let i=0;i<array.length;i++){
        curSum += array[i];
        maxSumSeen = Math.max(curSum,maxSumSeen);
        if(i>=elementsCount-1){
            curSum -= array[i-(elementsCount-1)]
        }
    }
    return maxSumSeen;
}   
let array = [1,3,5,12,14,6,9,10]
const maxValue = maxSubbArrSum(array,3);
console.log(maxValue);

function maxValueInSubArr(arr,size){
    let q = [] //que to store indexes
    let res = [];
    for(let i=0;i<arr.length;i++){
        while(q && arr[i]>arr[q[q.length-1]]){
            q.pop();
        }
        if(q[0]==i-size){
            q.shift()
        }
        q.push(i);
        if(i>=size-1){
            res.push(arr[q[0]])
        }
    }
    return res;
}

console.log(maxValueInSubArr([1,3,-1,-3,5,3,6,7],3));

