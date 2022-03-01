// Time Complexity = O(n^2)
// Space Complexity = O(1)

var twoSum = function(nums, target) {
    for(var i=0; i<nums.length; i++) {
        for(var j=i+1; j<nums.length; j++) {
            if(nums[i]+nums[j] === target)  return [i, j];
        }
    }
};


// Time Complexity = O(n)
// Space Complexity = O(n)

var twoSum = function(nums, target) {
    let map = {}
    
    for(let i=0; i<nums.length; i++) {
        let compliment = target - nums[i]
        if(map[compliment] !== undefined  && map[compliment] !== i) {
            return [map[compliment], i]
        } else {
            map[nums[i]] = i
        }
    }
};