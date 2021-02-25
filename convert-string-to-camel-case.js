// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// 
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
  const dashes = ['-', '_'];
  let newStr = "";
  // ths is to indicate that the following character goes after a dash
  let afterDash = false;
  [...str].forEach((s,i) => {
    // and if we reach such character then it should be capitalized
    if (afterDash) {
      newStr += s.toUpperCase();
      afterDash = false;
      return;
    }
    if (dashes.includes(s)) {
      console.log(s);
      afterDash = true;
    } else {
      newStr += s;
    } 
  })
  return newStr
}

// This is a better solution with regular expressions
function toCamelCase2(str) {
  return str.replace(/[-_].?/g, function(x) {if (x[1]) {return x[1].toUpperCase()} else {return ""}});
}

