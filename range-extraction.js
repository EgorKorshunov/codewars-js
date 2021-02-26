// A format for expressing an ordered list of integers is to use a comma separated list of either
// 
// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
// 
// Example:
// 
// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-6,-3-1,3-5,7-11,14,15,17-20"

// I see I don't follow the DRY rule here, I will change the solution
function solution(list){
  let result = ``;
  let tempCounter = [];
  tempCounter.push(list[0]);
  result = result.concat(list[0]);
  list.shift();
  
  list.map((num, i) => {
    if (num - tempCounter[tempCounter.length - 1] === 1){
      tempCounter.push(num);
      if (list.length - 1 === i) {
        if (tempCounter.length <= 2){
            result = result.concat(`,${tempCounter[tempCounter.length - 1]}`);
          } else {
            result = result.concat(`-${tempCounter[tempCounter.length - 1]}`);
          }
      }
    } else {
        if (tempCounter.length === 1) {
        } else if (tempCounter.length === 2){
          result = result.concat(`,${tempCounter[tempCounter.length - 1]}`);
        } else {
          result = result.concat(`-${tempCounter[tempCounter.length - 1]}`);
        }
        result = result.concat(`,${num}`);
        tempCounter = [num];
    }
    
    
  });
  return result;
}
