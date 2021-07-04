// Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

// Examples
// balancedParens(0) => [""]
// balancedParens(1) => ["()"]
// balancedParens(2) => ["()()","(())"]
// balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]

function balancedParens(n) {
  const result = [];
  
  function helper(leftNum, rightNum, temp) {
    if (leftNum > rightNum) return;
    if (!leftNum && !rightNum) result.push(temp);
    if (leftNum > 0) helper(leftNum-1, rightNum, temp + '(');
    if (rightNum > 0) helper(leftNum, rightNum-1, temp + ')');
  }
  
  helper(n,n,'');
  
  return result;
}
