// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
  // turning the number into string to use an array method on the number
  const strN = n.toString();
  // the number is now represented as a string, using reduce function each character is converted back to number one by one added to each other
  const sum = [...strN].reduce((acc, digit) => {
    return acc + Number(digit);
  }, 0)
  
  //if the resulting sum is smaller than 10, then return it, otherwise use the same function on it
  if (sum < 10) {
    return sum;
  } else {
    return digital_root(sum);
  }
}
