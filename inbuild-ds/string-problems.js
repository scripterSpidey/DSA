const log = console.log

function truncate(str,len){
    if(str.length >= len){
        return str.slice(0,len)+'...'
    }else{
        return str;
    }
}

log(truncate('name',5))
"_____________________________________________________________________________________"
function palindrome(str){
    return str === +str.toString().split('').reverse().join('');
}

log(palindrome(121));

"_____________________________________________________________________________________"
function hammingDistance(str1,str2){
    if(str1.length != str2.length) return false;
    let count = 0;
    for(let i=0;i<str1.length;i++){
        if(str1[i]!=str2[i]){
            count++
        }
    }
    return count;
}

log(hammingDistance('hi','hi'))

"_____________________________________________________________________________________"

function isAnagram(str1,str2){
    let s1 = str1.split('').sort().join('');
    let s2 = str2.split('').sort().join('');
    if(s1 == s2) return true
    else return false;
}

log(isAnagram('heelo','hello'));

"_____________________________________________________________________________________"
function codeLang(str){
   return Array.from(str).map((letter,ind)=>{
        if(letter != ' '){
            if(letter.toLowerCase() == 'y')return 'a';
            if(letter.toLowerCase() == 'z')return 'b'
            let charCode = letter.charCodeAt(0)+2;
            let codedLet = String.fromCharCode(charCode);
            return codedLet;
        }else{
            return letter;
        }
    }).join('')
}

log(codeLang('A'));

"_____________________________________________________________________________________"

function rotate(str,ind){
    return str.slice(ind)+str.slice(0,ind);
}

console.log(rotate('apple',3));

"_____________________________________________________________________________________"

"205. Isomorphic Strings"

"Given two strings word1 and word2, determine if they are isomorphic."

"Two strings word1 and word2 are isomorphic if the characters in s can be replaced to get t."

"All occurrences of a character must be replaced with another character while preserving the order of characters."
"No two characters may map to the same character, but a character may map to itself."
function isIsomorphic(word1,word2){
    let map1 = new Map();
    let map2 = new Map();
    for(let i=0;i<word1.length;i++){
        if(!map1.has(word1[i])){
            map1.set(word1[i],word2[i])
        }else if(map1.get(word1[i]) !== word2[i]){
            return false;
        }

        if(!map2.has(word2[i])){
            map2.set(word2[i],word1[i])
        }else if(map2.get(word2[i]) !== word1[i]){
            return false;
        }
    }
    return true;
}

console.log(isIsomorphic('foo','bar'));
"_____________________________________________________________________________________"

"Return longest common prefix from the given array of strings"
var longestCommonPrefix = function(strs) {
    
    let first = strs[0]//flow 
    for(let i=1;i<strs.length;i++){
        let second = strs[i];
        let prefix=''
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

console.log(longestCommonPrefix(["flower","flow","flight"]));

"_____________________________________________________________________________________"
