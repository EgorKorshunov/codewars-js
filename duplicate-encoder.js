// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// 
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


function duplicateEncode(word){
  let newString = "";
  let copies = [];
  
  // collecting the letters that have duplicates
  word = word.toLowerCase();
  [...word].forEach((s, i) => {
    for (let j=i+1; j<word.length; j++) {
      if (s === word[j]) {
        copies.push(s);
      }
    }
  });
  
  // comparing the original word with the duplicates and replacing the letters with brackets
  [...word].forEach(s => {
    if (copies.includes(s)) {
      newString = newString.concat(")");
    } else {
      newString = newString.concat("(");
    }
  })

  return newString;
}
