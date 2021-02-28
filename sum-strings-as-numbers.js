// Given the string representations of two integers, return the string representation of the sum of those integers.
// 
// For example:
// 
// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a,b) { 
  let result = [];
  //if the numbers have different lengths, the smaller one gets zeros to the start to match lengths
  if (a.length > b.length) {
    b = b.padStart(a.length, "0");
  } else if (b.length > a.length) {
    a = a.padStart(b.length, "0");
  }
  
  // split the string into an array and reverse it to do column addition
  a = a.split("").reverse();
  b = b.split("").reverse();
  
  // rem indicates if the addition of two digits is greater that 9 to add 1 in the following calculation
  let rem = 0;
  let sum = 0;
  a.forEach((n, i) => {
    sum = Number(n) + Number(b[i]) + rem;
    if (sum <= 9) {
      rem = 0;
      result = result.concat(sum.toString());
    } else {
      rem = 1;
      sum = sum - 10;
      result = result.concat(sum.toString());
    }
  })
  
  if (rem === 1) result = result.concat(["1"]);
  
  // in case there are some zeros in the beginning of the resulting sum, remove them
  let zero = result[result.length - 1];
  while (zero === "0") {
    result.pop();
    zero = result[result.length - 1];
  }
  
  // reverse the array and join it back into one string
  return result.reverse().join("");
}
