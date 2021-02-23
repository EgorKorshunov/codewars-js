// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

function addBinary(a,b) {
  let sum = a+b;
  let bin = "";
  while (sum > 1) {
    if (sum % 2) {
      bin = "1" + bin; 
    } else {
      bin = "0" + bin; 
    }
    sum = Math.floor(sum/2);
  }
  return "1" + bin;
}
