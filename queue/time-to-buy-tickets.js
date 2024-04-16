"2073. Time Needed to Buy Tickets"

'There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.'
'You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].'
'Each person takes exactly 1 second to buy a ticket.'
'A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets. '
'If a person does not have any tickets left to buy, the person will leave the line.'
'Return the time taken for the person at position k (0-indexed) to finish buying tickets.'

'Example 1:'
let tickets = [2,3,2];
let  k = 2
'Output: 6'
'Explanation: '
'- In the first pass, everyone in the line buys a ticket and the line becomes [1, 2, 1].'
'- In the second pass, everyone in the line buys a ticket and the line becomes [0, 1, 0].'
'The person at position 2 has successfully bought 2 tickets and it took 3 + 3 = 6 seconds.'

"______________________________________________________________________________________________"
'The question directly mentioned about que. So we can proceed this question with que'
'Initially we can make a ques with current indexes of ticket numbers'
'after a ticket is been bought we can take it from the que and push it to the back of the line'
'We only need to push tickects having value greater 0, coz we cant buy ticket that doesnt exist'


var timeRequiredToBuy = function(tickets, k) {
    let time = 0;
    let que = [];
    //first create a que with current indexes of tickets
    for(let i=0;i<tickets.length;i++){
        que.push(i);
    }
    //we need to check until que is empty or our desired position becomes 0
    while(que.length){
        //take out the first value and process it
        let index = que.shift();
        //incase our desired person has bought all tickets, we can return
        if(tickets[k]==0) return time;
        //if the current person bought all tickets, then we cant sell more to him, he will exit form the que
        //so we dont need to increment time or push him back to the que
        if(tickets[index]!=0){
            time++;
            //since he got one ticket, mark how many more tickets he needs
            tickets[index]--;
            //push him back to the que
            que.push(index);
        }
    }
    return time;
};