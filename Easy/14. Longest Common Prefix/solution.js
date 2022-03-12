// Problem Statement: https://leetcode.com/problems/longest-common-prefix/

// Time Complexity - O(nlogn)
// Space Complexity - O(1)

var longestCommonPrefix = function(strs) {
    let lcp = '';
    if (!strs || !strs.length) return lcp;
   
    strs.sort();
    
    for (let i = 0; i < strs[0].length; ++i) {
        if (strs[0][i] !== strs[strs.length - 1][i]) break;
        else lcp += strs[0][i];
    }
    return lcp;
  };