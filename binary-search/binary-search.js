const arr= [-7, 0, 1, 2, 4, 6, 7];

//binary search can only be performed on soreted arrays
function findIndexBinary(n){
    let startInd = 0;
    let endInd = arr.length -1;
    while(startInd <= endInd){
        let midInd = Math.floor((endInd+startInd)/2);  //T O(logn)
        if(arr[midInd] == n) return midInd;

        if(n < arr[midInd]) {
            endInd = midInd - 1;
        }else{
            startInd = midInd +1;
        }
    }
    return -1;
}
console.log('ind',findIndexBinary(7));


//Binary search using recursion method...................

function recursiveBinarySearch(startInd,endInd,num){
    let midInd = Math.floor((startInd + endInd)/2);
    if(startInd>endInd) return -1
    if(arr[midInd]==num) return midInd;
    if(num <  arr[midInd]){
        return recursiveBinarySearch(startInd,midInd-1,num)
    }else{
        return recursiveBinarySearch(midInd+1,endInd,num)
    }
}
console.log(recursiveBinarySearch(0,arr.length-1,10));

let x = [3,5,6,6,6]
let y = x.splice(1,2,3);
console.log(y)