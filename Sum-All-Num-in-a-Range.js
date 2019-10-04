/*
We'll pass you an array of two numbers.
Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.
*/

function sumAll(arr) {
  let ordered = arr.sort((a,b) => a - b);
  let startNum = ordered[0];
  let endNum = ordered[1];
  let newArr = [];

  for(startNum; startNum <= endNum; startNum += 1){
    newArr.push(startNum);
  }
  return newArr.reduce((a,b) => a + b);
}

sumAll([1, 4]);

console.log(sumAll([5,10]));

/*
1. Sort the arr in ordered.
2. Get start and end numbers by indexs of the arr.
3. Make a new arr to sotred a range of numbers
4. use reduce() to sum all numbers in arr.
*/
