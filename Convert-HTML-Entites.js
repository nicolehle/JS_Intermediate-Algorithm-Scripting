//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  // &colon;&rpar;
  let entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  }

  return str
          .split("")
          .map(x => entities[x] || x)
          .join("");
}

convertHTML("Dolce & Gabbana");
console.log(convertHTML("Dolce & Gabbana"));

//To loop through string, make it an array with split() method!! 
