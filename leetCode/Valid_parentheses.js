// Valid Parentheses

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

// 파라미터로 전달되는 문자열 안에 있는 괄호들이 유효한 괄호의 쌍인지 알아내야 한다.

var isValid = function(s) {
  let pairsArray = {
      ")": "(",
      "]": "[",
      "}": "{"
  }
  let arr = [];
  for(let i = 0; i < s.length; i ++){
      if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
          arr.push(s[i]);
      }
      else{
          if(arr[arr.length - 1] === pairsArray[s[i]]){
              arr.pop();
          }
          else return false;
      }
  }
  return arr.length === 0 ? true : false;
};

console.log(isValid("()")); // true
console.log(isValid("({})}")); // false
console.log(isValid("(){}[]")); // true
console.log(isValid("({)}[][]")); // false
console.log(isValid("()()(())"));  // true
console.log(isValid("((){}(({{}}))[])")); // true
