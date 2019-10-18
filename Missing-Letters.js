/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
 for(let i = 1; i < str.length; i++){
   if(str.charCodeAt(i) - str.charCodeAt(i -1) > 1){
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
   }
 }
}

fearNotLetter("abce");

console.log(fearNotLetter("abce"));

/*
1. Iderate through str to find each letters' codes number
2. condition if in between code different is more than 1, that's a code of missing letters
3. return the actual alphabet with the code by String.fromCharCode() method. 
*/
