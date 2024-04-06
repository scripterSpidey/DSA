'1249. Minimum Remove to Make Valid Parentheses';

"Given a string s of '(' , ')' and lowercase English characters."
"Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions )"
"so that the resulting parentheses string is valid and return any valid string."
'Formally, a parentheses string is valid if and only if:'
'It is the empty string, contains only lowercase characters, or'
'It can be written as AB (A concatenated with B), where A and B are valid strings,'
'or It can be written as (A), where A is a valid string.'


'Example 1:'
'Input: s = "lee(t(c)o)de)"'
'Output: "lee(t(c)o)de"'
'Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.'

'Example 2:'
'Input: s = "a)b(c)d"'
'Output: "ab(c)d"'

'Example 3:'
'Input: s = "))(("'
'Output: ""'
'Explanation: An empty string is also valid.'

"_________________________________________________________________________________"
"The tricky part about this question is how paranthesis works"
"There is a small concept which can make this question much easier:"
"If a closing bracket ')' is encountered, then"
"the last bracket should be and opening one '('"
'Thats all we need to solve this question'
"So its all about keeping track of the last element. Inorder to do that, the stack"
'data structure seems like a good option'

var minRemoveToMakeValid = function(s) {
    //we uses a stack to store the indexes of bracket elems, bcoz we need to remove 
    //the non valid brackets later
    let stack = [];
    //we canot modify a string in js , so convert it to an array
    let arr = s.split('')
    for (let i=0;i<s.length;i++){
        //if its an opening, then we need to remember its position, 
        //incase  if we encounter a closing one, then we have to check for the last open bracket
        if(s[i]=='('){
            stack.push(i)
        }else if (s[i]==')'){
            //if there is nothing in the stack when a closing is encountered,
            //it implies that ther were no openings before or the all the openings are
            //already paired. then we have to remove this closing para from our array;
            if(!stack.length){
                arr[i] = ''
            }else{
                //if the last index points to the opening bracket, then we dont need to remove it
                //we can pop of that index from stack;
                stack.pop()
            }
        }
    }
    //delete all the elements from the array which are pointed by indexes stored in stack
    //these are the opening brackets which are not paired with a closing bracket.
    for(const pos of stack){
        arr[pos] = '';
    }
    //join the array to form the string and returns it;
    return arr.join('');
};