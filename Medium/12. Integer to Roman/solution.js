// Problem Statement: https://leetcode.com/problems/container-with-most-water/

// Time Complexity - O(nlogn)
// Space Complexity - O(n)

var intToRoman = function(num) {
    let map = {
        '1000' : 'M',
        '900' : 'CM',
        '500' : 'D',
        '400' : 'CD', 
        '100' : 'C', 
        '90' : 'XC',
        '50' : 'L',
        '40' : 'XL',
        '10' : 'X',
        '9' : 'IX',
        '5' : 'V',
        '4' : 'IV',
        '1' : 'I'
    }
    
    let sorted = Object.keys(map).sort((a,b) => {
        return b - a;
    })
    
    let result = "";
    
    for(let val of sorted) {
        if(val > num) continue;
        
        result += map[val];
        num -= map[val];
    }
    
    return result
};