let array = [3,2,6,1,8,0,3,-8];

function bubbleSort(){
    let swapped;
    do{
        swapped = false;
        for(let i=0;i<array.length-1;i++){
            if(array[i]>array[i+1]){
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped= true;
            }
        }
    }while(swapped);
   
}

// bubbleSort();
console.log(array);