/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longestPal = '';
  
  for (let i = 0; i < s.length; i++) {
    let left = i, right = i;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    const oddPal = s.slice(left+1, right);
    left = i, right = i+1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    const evenPal = s.slice(left+1, right);
    if (oddPal.length > longestPal.length) {
      longestPal = oddPal;
    }
    if (evenPal.length > longestPal.length) {
      longestPal = evenPal;
    }
  }
  
  return longestPal;
};