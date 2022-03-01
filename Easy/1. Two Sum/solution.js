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