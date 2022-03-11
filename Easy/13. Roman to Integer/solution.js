// Problem Statement: https://leetcode.com/problems/roman-to-integer/

// Time Complexity - O(n)
// Space Complexity - O(n)

var romanToInt = function(s) {
    if(s === "0") return null;
     
    var sym = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    
    let result = 0;
    
    s.split('').forEach((num, i) => {
        if(sym[num] < sym[s[i+1]]) result -= sym[num];
        else result += sym[num]
    })
    
    return result;
 }