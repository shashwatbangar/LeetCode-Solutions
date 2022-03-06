// Problem Statement: https://leetcode.com/problems/reverse-integer/

// Time Complexity - O(n)
// Space Complexity - O(1)

var reverse = function(x) {
    let reverse = 0
    let temp = Math.abs(x)
    
    while(temp > 0) {
        reverse = (reverse * 10) + temp % 10;
        temp = Math.floor(temp / 10)
    }
     
     if(reverse < Math.pow(-2, 31) || reverse > Math.pow(2, 31)) {
         return 0
     } else if(x < 0) {
         return -reverse
     } else return reverse
};

