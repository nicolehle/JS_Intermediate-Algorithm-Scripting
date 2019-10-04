/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var newArr;
  // Same, same; but different
  newArr= arr1.concat(arr2).filter(x => !arr1.includes(x) || !arr2.includes(x));
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))

/*
1. Concat two arrys in one to make easy to caompare.
2. filter each arrys that has different value.
*/
