var trap = function(height) {
    const len = height.length
    let prefixMax = new Array(len).fill(0);
    let suffixMax = new Array(len).fill(0);
    prefixMax[0] = height[0];
    suffixMax[len - 1] = height[len - 1];
    let result = 0;
    
    for(let i = 1; i < len; i++) {
        prefixMax[i] = Math.max(height[i], prefixMax[i - 1])
    }
    
    for(let i = len - 2; i >= 0; i--) {
        suffixMax[i] = Math.max(height[i], suffixMax[i + 1])
    }
    console.log(prefixMax);
    console.log(suffixMax)
    
    for(let i = 0; i < len; i++) {
        result += Math.min(prefixMax[i], suffixMax[i]) - height[i]
    }
    return result;
};