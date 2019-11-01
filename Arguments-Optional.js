/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether(a, b) {
 if(typeof a !== "number"){
    return undefined
  }

  const sumTwoAnd = b =>
    typeof b === "number" ? a + b : undefined;
  return typeof b === "undefined" ? b => sumTwoAnd(b) : sumTwoAnd(b);
  }


addTogether(2,3);

console.log(addTogether(2,3));

// addTogether(2)(3) should return 5, return a function, meaning a funtion should be returned when a second argument is not a number.
