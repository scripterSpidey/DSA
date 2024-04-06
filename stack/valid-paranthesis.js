"20. Valid Parentheses"

"Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',"
'determine if the input string is valid.'

'An input string is valid if:'
'=> Open brackets must be closed by the same type of brackets.'
'=> Open brackets must be closed in the correct order.'
'=> Every close bracket has a corresponding open bracket of the same type.'

'Example 1:'
'Input: s = "()"'
'Output: true'

'Example 2:'
'Input: s = "()[]{}"'
'Output: true'

'Example 3:'
'Input: s = "(]"'
'Output: false'

"_______________________________________________________________________________"
"The tricky part about this question is how paranthesis works"
"There is a small concept which can make this question much easier:"
"If a closing bracket '}' is encountered then the last bracket should be and opening one '{'"
'and it should be of the same type. Thats all we need to solve this question'
"So its all about keeping track of the last element. Inorder to do that, the stack"
'data structure seems like a good option'


var isValid = function(s) {
    let stack = [];
    //we need a map to retrieve the similar pairs of brackets.
    //otherwise we will have to use a lot conditional statememts.
    let map ={
        '(':')',
        '{':'}',
        '[':']'
    }
    for(let i=0;i<s.length;i++){
        //if its an opening one, then the all opening brackets are stored as keys in map
        //we need to push this to the stack. coz incase if we encounter a closing one,
        //then we need to check for the last element.
        if(s[i] in map){
            stack.push(s[i])
        //if it is closing bracket...
        }else if(s[i]==')' || s[i] == '}' || s[i] == ']'){
            //if we encounter a closing bracket before an opening, then its not a valid one,
            //stack empty implies either we have not encountered any openings or all openings 
            // are already paired with other closing brackets.
            if(!stack.length){
                return false;
            //if the last opening is not of the same type of the closing, its not valid.
            //Here we are actually accesssing the value of map
            }else if(map[stack[stack.length-1]] !== s[i]){
                return false;
            }else{
                //this means that the closing is of same type as of that last opening we have encountered,
                //so we can pop it off, since it is paired.
                stack.pop();
            }
        }
    }
    //if there is anything left in the stack means there are brackets which has not been paired,
    //so the string is not valid;
    return stack.length? false: true;
};

