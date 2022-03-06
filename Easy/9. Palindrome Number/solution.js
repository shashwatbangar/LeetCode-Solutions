// Problem Statement: https://leetcode.com/problems/reverse-integer/

// Time Complexity - O(n)
// Space Complexity - O(1)

var isPalindrome = function(x) {
    const palindrome = x.toString().split('');
    
    
    if(palindrome.join('') === palindrome.reverse().join('')) return true;
    else return false;
};

