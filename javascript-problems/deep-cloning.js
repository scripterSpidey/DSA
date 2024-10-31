const array = [2,3,[6,7],{name:'ahmed',address:{place:'kottakal'}},[6,[3,4,5]],[0]]


function deepCopy(item){
    if(Array.isArray(item)){
        const copiedItems = item.map(arr=>deepCopy(arr))
        return copiedItems;
    }else if(item && (typeof item === 'object')){
        const copiedItems = Object.keys(item).reduce((acc,curr)=>{
            acc[curr] = deepCopy(item[curr]);
            return acc;
        },{});
        return copiedItems;
    }
    return item;
}

const deepCopyArray = deepCopy(array);
