// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.

 

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
// Example 3:

// Input: s = "triplepillooooow"
// Output: 5
// Example 4:

// Input: s = "hooraaaaaaaaaaay"
// Output: 11
// Example 5:

// Input: s = "tourist"
// Output: 1
 

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters.


const maxPower = (s) => {
    const strArray = s.split('')
    let power = 1;
    let maxPower = 1;
    
    for ( let i = 0; i < strArray.length; i++) {
        if (strArray[i] === strArray[i + 1]) {
            power = power + 1;
        } else {
            maxPower = Math.max(power, maxPower);
            power = 1;
        }
    }
    return maxPower;
}
console.log(maxPower('leetcooode'));