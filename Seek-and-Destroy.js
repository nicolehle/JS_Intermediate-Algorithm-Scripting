/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  // Remove all the values
  let numToSeek = Array.from(arguments).slice(1);
  console.log(numToSeek);

  return arr.filter(x => !numToSeek.includes(x));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/*
1. Call arguments with arguments object
2. learn about Array.from(). 
*/
