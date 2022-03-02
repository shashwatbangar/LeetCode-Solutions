var lengthOfLongestSubstring = function(s) {
    let left = 0
    let right = 0
    let set = new Set();
    let result = 0;
    
    while(right < s.length) {
        if(!set.has(s[right])) {
            set.add(s[right++]);
            result = Math.max(result, right - left);
        } else {
            set.delete(s[left++])
        }
    }
    return result
};