"79. Word Search";
"Given an m x n grid of characters board and a string word, return true if word exists in the grid."

"The word can be constructed from letters of sequentially adjacent cells,"
" where adjacent cells are horizontally or vertically neighboring."
"The same letter cell may not be used more than once."
"This is exactly like the puzzle game. were we need to find the given words from table"
"_____________________________________________________________________________"
"Visualise this as rows and columns in a table"

"For this problem we can proceed with Brute Force Method since this needs a lot of thinking"
"In the puzzle we will look for the starting of given word through all the cells of table"
"Like wise we can start with each column of table and look for full words"
"if we dont encouter the the next word in the chain we will backtrack, i.e, we return false"
"We will do the search from a cell in all direction , this is similar to dfs"

var exist = function(board, word) {
    //first get the size of entire array, which stands for row length
    let rowLen = board.length;
    //column length can be found out by accessing length of any inner array.
    let colLen = board[0].length;
    //We need to track the visited positions like we does in the graph
    //this is basically a dfs search
    //if we encounter it again we can backtrack  to the origin
    let visited = new Set();
    //proceed with bruteforce approach
    for(let i=0;i<rowLen;i++){
        for(let j=0;j<colLen;j++){
            //we can return at the moment when we find the word;
            if(search(i,j,0)) return true;
        }
    }
    //we need position of cell which is denoted by row and col
    //we start from (0,0) and so on...
    //first we looking for the starting letter of word, thats why we send it as 0
    function search(row,col,wordIndex){
        //if the index reaches the len of word, means we have only encountered matching letters of word
        if(wordIndex == word.length) return true;
        //store the position as a string. arrays will not be same even for similar values
        //since arrays check for refferences too....
        let visit = `${row},${col}`
        //if we are visiting the same cell again return from there 
        if(visited.has(visit)) return false;
        //in case the cell positions jump out of range we need to return false;
        if(row<0 || col<0 || row>=rowLen || col>=colLen) return false;
        //if the letter doesnot matches the letter in word return false; 
        if(word[wordIndex] !== board[row][col]) return false;
        //add the current position to array
        visited.add(visit);
        //if none of the above falsy conditions are satified, then we are on the right track
        //we are on the position were letter equals to the letter in word
        //we need to send search functions in all directions.
        //at the edge cells position will jump out of range and it will return false
        let searchLeft = search(row,col-1,wordIndex+1);
        let searchTop  = search(row-1,col,wordIndex+1); 
        let searchRight = search(row,col+1,wordIndex+1);
        let searchDown = search(row+1,col,wordIndex+1);
        //this step is not neccessary, but ot optimise the memory we can delete the already visited
        //positions. we wont be coming back to here again.
        visited.delete(visit)
        //if any of the search results returns true,then we found the word in one direction
        //we can return true;
        return(searchLeft || searchTop || searchRight || searchDown)
    }

    //if we dont encounter the word. true wont be returned, so we can return false;
    return false;   
}; 

let board = [["A","B","C","E"],
             ["S","F","C","S"],
             ["A","D","E","E"]];
"We can represent this data like this "             
"board = [(0,0),(0,1),(0,2),(0,3)]"
"        [(1,0),(1,1),(1,2),(1,3)]"
"        [(2,0),(2,1),(2,2),(2,3)];"

let word = "ABCCED"
 
console.log(exist(board,word)) 