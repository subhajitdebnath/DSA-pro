// Running Sum of 1D Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].


/**
 * @param {number[]} nums
 * @return {number[]}
 */

function runningSum(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        result[i] = nums[i] + (result[i - 1] || 0);
    };

    return result;
};

// Example usage
const nums = [1, 2, 3, 4];
console.log(runningSum(nums)); // [1, 3, 6, 10]