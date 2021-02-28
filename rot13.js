// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


// This solution works but doesn't look fine
function rot13(message){
  let code;
  return [...message].reduce((acc, s) => {
    code = s.charCodeAt(0);
    if (code >= 65 && code <= 90){
      if (code + 13 > 90) {
        code = 65 + 13 - (91 - code);
        return acc.concat(String.fromCharCode(code));
      } else {
        code = code + 13;
        return acc.concat(String.fromCharCode(code));
      }
    } else if (code >= 97 && code <= 122) {
      if (code + 13 > 122) {
        code = 97 + 13 - (123 - code);
        return acc.concat(String.fromCharCode(code));
      } else {
        code = code + 13;
        return acc.concat(String.fromCharCode(code));
      }
    } else {
      return acc.concat(s);
    }
  }, "");
  
}


// This one should be better
function rot13(message){
  // uppercase letters' codes start from 65, lowercas from 97
  let code;
  let start;
  return message.replace(/[a-z]/gi, s => {
              code = s.charCodeAt(0);
              start = code >= 97 ? 97 : 65;
              if (code + 13 > start + 25) {
                code = start + 13 - (start + 26 - code);
              } else {
                code = code + 13;
              }
              
              return String.fromCharCode(code);
         }); 
}
