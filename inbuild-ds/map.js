"Map holds 2 values key and value. They can be of any datatype";
"Map are ordered datastructure"
"We can not define functions and methods inside map like in objects"
"There are no default keys in map like objects"


const map = new Map([[1,2],['1','name']]);

map.set('name','zulaikh');
console.log(map.has('name'));

console.log(map);
map.delete('1');

map.clear()
console.log(map.size)
for(const [key,value] of map){
    console.log(key,value)
}

let string = 'gaammmj';
let freq = new Map();
let obj={}
for(let char of string){
    if(freq.has(char)){
        freq.set(char,freq.get(char)+1)
    }else{
        freq.set(char,1)
    }
}

for(let char of string){
    obj[char] = (obj[char] || 0) +1;
}

let max= 0;
let maxC= '';
for(let char in obj){
    if(obj[char]>max){
        max = obj[char];
        maxC= char;
    }
}

console.log(freq);
let maxChar = '';
let maxCount = 0
for(let [char,count] of freq){
    if(count>maxCount){
        maxCount = count;
        maxChar = char;
    }
}



console.log(maxChar);
console.log(maxC);
console.log(max)