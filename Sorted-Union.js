/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(arr) {
    let args = [...arguments];
    //put every arguments into an array using '...' since a number of arguments varies'
    let final =[];
    //set a new empty array for final result
    for(let i = 0; i < args.length; i++){
        for(let j = 0; j < args[i].length; j++){ //loop through array in depth
            if(!final.includes(args[i][j])){ 
                final.push(args[i][j])
            }
        }
    } return final;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
