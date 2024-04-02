var longestCommonPrefix = function(strs) {
    
    let first = strs[0]//flow 
    for(let i=1;i<strs.length;i++){
        let second = strs[i];
        let prefix=''//fl
        for(let j=0;j<Math.min(first.length,second.length);j++){
            if(first[j]==second[j]){
                prefix+=first[j];
            }else{
                break;
            }
        }
        first = prefix.length<first.length? prefix: first;
    }
    return first;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))