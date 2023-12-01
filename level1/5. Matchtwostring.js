// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

var canConstruct = function(ransomNote, magazine) {
    ransomNote = ransomNote.split('');
    magazine = magazine.split('');
    
    for(let letter of ransomNote) {
    	/* console.log(letter) */;
      let index = magazine.findIndex(ltr => ltr === letter);
      console.log(letter, index);
      if(index >= 0) {
      	magazine.splice(index, 1);
      } else {
      	return false;
      }
    }
    return true;
    
    /* console.log(ransomNote, magazine) */
};

const ransomNote = 'ada';
const magazine = 'asa';
const result = canConstruct(ransomNote, magazine);
console.log(result);