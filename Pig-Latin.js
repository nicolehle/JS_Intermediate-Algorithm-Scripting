/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  const vowelRegex = /[aeiou]/gi;
  let pigLatin = '';

  if(str[0].match(vowelRegex)){
    pigLatin = str + 'way';
  } else if(str.match(vowelRegex) === null){
    pigLatin = str + 'ay';
  } else {
    let firstVowel = str.indexOf(str.match(vowelRegex)[0])
    console.log(firstVowel)
    pigLatin = str.substr(firstVowel) + str.substr(0, firstVowel) + 'ay';
  }

  return pigLatin;
}

translatePigLatin("consonant");
console.log(translatePigLatin("consonant"));

//1. get vowel with regex.
//2. When first letter starts with vowel, add 'way' at the end.
//3. When the string is all consonants, add 'ay' at the end.
//4. Otherwise, find the index of first letter starts and substr it two parts and add it togethers with 'ay' at the end.
