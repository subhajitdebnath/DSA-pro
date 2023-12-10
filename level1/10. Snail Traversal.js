// 2624. Snail Traversal
// https://leetcode.com/problems/snail-traversal/description/
// Input: 
// nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
// rowsCount = 5
// colsCount = 4
// Output: 
// [
//  [19,17,16,15],
//  [10,1,14,4],
//  [3,2,12,20],
//  [7,5,18,11],
//  [9,8,6,13]
// ]
// Example 2:
// Input: 
// nums = [1,2,3,4]
// rowsCount = 1
// colsCount = 4
// Output: [[1, 2, 3, 4]]
// Example 3:
// Input: 
// nums = [1,3]
// rowsCount = 2
// colsCount = 2
// Output: []
// Explanation: 2 multiplied by 2 is 4, and the original array [1,3] has a length of 2; therefore, the input is invalid.
// Constraints:
// 0 <= nums.length <= 250
// 1 <= nums[i] <= 1000
// 1 <= rowsCount <= 250
// 1 <= colsCount <= 250


Array.prototype.snail = function(rowsCount, colsCount) {
	if((rowsCount * colsCount) === this.length) {
		let res = Array(rowsCount).fill().map(() => []);
    let index = 0;
    let forward = true;
    for(let i=0; i<colsCount; i++) {
    	col = [];
    	for(let j=0; j<rowsCount; j++) {
        if(forward) {
					res[j][i] = this[index];
        } else {
        	res[colsCount - j][i] = this[index];
        }
        index++;
      }
      forward = !forward;
    }
    return res;
    
    
  } else {
    return [];
  }
}

const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
const rowsCount = 5;
const colsCount = 4;
console.log(arr.snail(rowsCount, colsCount));