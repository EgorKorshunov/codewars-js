// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.
// 
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
// 
// Examples
// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000
// Help
// Symbol	Value
//      I	1
//      V	5
//      X	10
//      L	50
//      C	100
//      D	500
//      M	1000


const matches = {"M": 1000, "CM": 900, "D": 500, "CD": 400, 
                   "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10,
                   "IX": 9, "V": 5, "IV": 4, "I": 1};

const RomanNumerals = {
  
  toRoman: num => {
    let res = "";
    let div = 0;
    for (m in matches) {
      div = Math.floor(num/matches[m]);
      if (div > 0){
        res = res.concat(m.repeat(div));
        num = num % matches[m];
      }
    }
    return res;
  },
  
  fromRoman: romNum => {
    let res = 0;
    for (m in matches) {
      while (romNum.indexOf(m) === 0){
        res += matches[m];
        romNum = romNum.substring(1);
      }
    }
    return res;
  }
}
