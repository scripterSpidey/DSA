//using generator function reverse print the number with a 1 sec delay

function* generator(num){
    while(num>0){
        yield num;
        num--;
    }
}
const generate = generator(10)
const interval = setInterval(()=>{
    const {value,done} = generate.next();
    console.log(value)
    if(value==1){
        clearInterval(interval)
    }
    
},1000)