/*Return an English translated sentence of the passed binary string.

The binary string will be space separated.*/

function binaryAgent(str) {
  let splited = str.split(" ");
  let final = [];

  splited.map(x => final.push(String.fromCharCode(parseInt(x, 2))))

  return final.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// 1. split str
// 2. map it thorugh translate each part of binary code with Stroing.fromCharCode()
