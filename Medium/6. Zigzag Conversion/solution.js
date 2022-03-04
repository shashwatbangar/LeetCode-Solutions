// Problem Statement: https://leetcode.com/problems/zigzag-conversion/

// Time Complexity - O(n^2)
// Space Complexity - O(n)

var convert = function(s, numRows) {
    let matrix = new Array(numRows).fill("");
    
    let idx = 0;;
    
    
    while(idx < s.length) {
        for(let i=0 ;i <numRows; i++) {
            if(idx >= s.length) break;
            matrix[i] += s[idx]
            idx++
        }
        
        for(let i=numRows-2; i>0; i--) {
            if(idx >= s.length)  break;
            matrix[i] += s[idx]
            idx++
        }
    }
    return matrix.join("")
};

// Post: https://leetcode.com/problems/zigzag-conversion/discuss/1818459/JavaScript-Easy-Clean-Code-solution