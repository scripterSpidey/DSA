
'Fibunacci series by recursion';

function fibu(n){
    if(n<2) return n;
    return fibu(n-1) + fibu(n-2); //O(1) + O(1)
 }      //fib(1)        fib(0)
           
 console.log(fibu(4));

'Factorial of a number';

function fibunacciFactorial(n){
    if(n<1) return 1;
    return n * fibunacciFactorial(n-1);
}




'Binary search by recursion'

const arr = [4,5,61,3,6,2,5,6,4]

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



'Sum of numbers..........................................';

function sumOfNumbers(n){
    if(n<=1) return n;
    return n + sumOfNumbers( n-1);
}

// console.log('sum of numbers: ',sumOfNumbers(5));

function powerBasedTo2(n){
    if( n == 0) return 1;
    n--;
    return 2*powerBasedTo2(n)
}

// console.log(powerBasedTo2(3));

function power(base,pow){
    if(pow == 0) return 1;
    return base * power(base,pow-1);
}

// console.log('power: ', power(10,3));


function checkElements(n,arr,pos){
    if(pos == arr.length-1){
        return arr[pos] > n ? true : false;
    }
    return arr[pos] > n && checkElements(n,arr,pos+1);
}

// console.log('all elements satisfies the condition: ',checkElements(4,[9,8,8],0));

let security = [5,3,3,3,5,6,2];

var goodDaysToRobBank = function(security, time) {
    let days=[];
    let check=true;
        for(let i=time;i<security.length-time;i++){//i=2
            for(let j=i-time;j<i;j++){//j=0
                if(security[j]<security[j+1]){//[0]<[1] 
                    check=false;
                    break
                }
            }
            if(check){
                for(let j=i;j<time+i;j++){//j=2 j<4
                    if(security[j]>security[j+1]){
                        check=false;
                        break
                    }
                } 
                if(check){days.push(i)}
            }
            check=true
        }
    return days
};

function fibSeries(n,fibArr = [0,1]){
    if(n<2) return fibArr.slice(0,n);
    const nextNum = fibArr[fibArr.length-1] + fibArr[fibArr.length-2];
    fibArr.push(nextNum)
    return fibSeries(n-1,fibArr)
}

console.log(fibSeries(4));


function factorial(num){
    if(num<=1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(5))

let sorted_list = [1, 3, 4, 5, 6, 9, 11, 15, 18, 21, 25] 
let n = 15

function binarySearch(n){
    let start = 0;
    let end = sorted_list.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(sorted_list[mid]==n) return mid;
        if(n>sorted_list[mid]){
            start = mid+1;
        }else{
            end = mid-1;
        }
    }
    return -1;
}

console.log(binarySearch(100))


function palindrome(str,start=0,end=str.length-1){
    if(str[start] == str[end]){
        start++;
        end--;
    }else{
        return false;
    }
    if(start>end) return true;
    return palindrome(str,start,end)
}

console.log(palindrome('malayalam'))


