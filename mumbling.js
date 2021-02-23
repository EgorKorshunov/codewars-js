// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	const s1 = s.split("");
  let mumble = "";
  
  for (i = 0; i < s1.length; i++){
    mumble = mumble + s1[i].toUpperCase() + s1[i].toLowerCase().repeat(i) + "-";
  }
  
  return mumble.slice(0, -1)
}
