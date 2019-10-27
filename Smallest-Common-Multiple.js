/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */

function smallestCommons(arr) {
  let fullArr, sortedArr;
  fullArr = [];

  sortedArr = arr.sort((a,b) => b - a);
  console.log(sortedArr);

  for(let i = arr[0]; i >= arr[1] ; i--) {
    fullArr.push(i);
    }

let final = 0;
let loop = 1;
let n;

do {
  final = fullArr[0] * loop * fullArr[1];
  for ( n =2; n < fullArr.length; n++){
    if(final % fullArr[n] !==0) {
      break;
    }
  }
  loop++;
} while (n!== fullArr.length);


  return final;
}


smallestCommons([1,5]);
console.log(smallestCommons([1,5]));
