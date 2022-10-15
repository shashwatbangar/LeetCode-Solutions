var productExceptSelf = function(nums) {
    const len = nums.length;
    let left = new Array(len).fill(1);
    let right = new Array(len).fill(1);
    let result = new Array(len).fill(0);
    
    for(let i = 1, j = len - 2; i < len, j >= 0; i++, j--) {
        left[i] = left[i - 1] * nums[i - 1];
        right[j] = right[j + 1] * nums[j + 1];
    }
    
    for(let i = 0; i < len; i++) {
        result[i] = left[i] * right[i];
    }
    return result;
};