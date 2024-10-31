//second smallest odd number using reducer;

const numbers = [4, 1, 6, 7, 8, 9, 10, ]

const lowestOddNumber = numbers.reduce((acc, curr) => {
    if ( curr%2===1 &&  curr < acc.smallest) {
        acc.secondSmallest = acc.smallest;
        acc.smallest = curr
    } else if ( curr%2===1 && curr < acc.secondSmallest) {
        acc.secondSmallest = curr;
    }
    return acc
}, {
    smallest: Infinity,
    secondSmallest: Infinity
})

console.log(lowestOddNumber)