// Fizz Buzz
// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]

var fizzBuzz = function (n) {
    const res = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                res[i - 1] = 'FizzBuzz';
            } else {
                res[i - 1] = 'Fizz';
            }
        } else if (i % 5 === 0) {
            if (i % 3 === 0) {
                res[i - 1] = 'FizzBuzz';
            } else {
                res[i - 1] = 'Buzz';
            }
        } else {
            res[i - 1] = i.toString();
        }
    }
    return res;
};


const n = 3;
const op = fizzBuzz(n);
console.log(op);