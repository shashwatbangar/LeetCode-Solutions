// Problem Statement: https://leetcode.com/problems/container-with-most-water/

// Time Complexity - O(n)
// Space Complexity - O(1)

var maxArea = function(height) {
    let result = 0, left = 0, right = height.length - 1;

	while (left < right) {
		let smallestSide = Math.min(height[left], height[right]);
		let area = (right - left) * smallestSide;

		if (area > result) result = area;

		if (height[left] < height[right]) left++;
		else right--;
	}
    return result;
};

// Post: https://leetcode.com/problems/container-with-most-water/discuss/1828075/JavaScript-92-Faster-Easy-Clean-solution
