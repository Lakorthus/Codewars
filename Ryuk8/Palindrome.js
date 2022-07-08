// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
  var re = /[\W_]/g;
  var lowRegStr = x.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");

  return reverseStr === lowRegStr;
}
