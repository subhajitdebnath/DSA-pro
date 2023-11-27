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