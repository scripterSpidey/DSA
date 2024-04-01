const log = console.log;


let string = "ahammed zulaikh";
let name = "ahammed zulaikh"

log(string.indexOf('a'));
log(string.lastIndexOf('a'));
let capitalized = string.charAt(string.indexOf('a')).toUpperCase() + string.slice(string.indexOf('a')+1);
log(capitalized);
let replacedall = string.replaceAll('a','A');
let replace = string.replace('a',"A"); //replace replaces first element
log(replace)
log(replacedall);
let concated = string.concat(' zulaikh');
log(concated)
log(string.startsWith('a'))
log(string.endsWith('d'));
log(string.substring(8,15));

log(string.slice(8,-2)); //more efficient..............
log(String.fromCharCode())
log(string.charCodeAt(0))
log(string.localeCompare(name));
log(name.includes('z'));

let newStr = 'Ahammed zulaikh';
console.log(newStr.substring(0,2))
console.log(newStr.indexOf('a',8))
console.log(newStr.replace('a','A'))
log('pad',newStr.padStart(newStr.length+9,'z'))

