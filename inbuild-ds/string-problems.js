const log = console.log

function truncate(str,len){
    if(str.length >= len){
        return str.slice(0,len)+'...'
    }else{
        return str;
    }
}

log(truncate('name',5))

function palindrome(str){
    return str === +str.toString().split('').reverse().join('');
}

log(palindrome(121));

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

let num = 1
log(num.toString(2));

function isAnagram(str1,str2){
    let s1 = str1.split('').sort().join('');
    let s2 = str2.split('').sort().join('');
    if(s1 == s2) return true
    else return false;
}

log(isAnagram('heelo','hello'));

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

function rotate(str,ind){
    return str.slice(ind)+str.slice(0,ind);
}

console.log(rotate('apple',3))