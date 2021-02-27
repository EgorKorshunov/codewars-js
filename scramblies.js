// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
// 
// Notes:
// 
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// This solution crashed on long inputs, so it is no good in terms of performance
function scramble(str1, str2) {
  console.log("START", str1, str2);
  for (let s of str2) {
    console.log(s, str1.search(s));
    if (str1.search(s) === -1) {
      return false
    } else {
      str1 = str1.replace(s, "");
    }
  }
  
  console.log("END", str1, str2);
  return true;
}

// I expected this solution to work faster, but it was still over 12000ms 
function scramble1(str1, str2) {
  const charCount = {};
  for (i in str1){
    const letter = str1[i];
    charCount[letter] = charCount[letter] || 0;
    charCount[letter]++;
  }
  for (i in str2){
    const letter = str2[i];
    if (charCount[letter]>0){
      charCount[letter]--;
    } else {
      return false;
    }
  }
  return true;
}

// And this solution works on long inputs
function scramble(str1, str2) {
  const charCount = str1.split("").reduce((acc, letter) => {
    acc[letter] = acc[letter] || 0;
    acc[letter]++;
    return acc;
  }, {});

  return str2.split('').every((letter) => {
    if (charCount[letter] > 0) {
      charCount[letter]--;
      return true;
    } else {
      return false;
    }
  });

}
