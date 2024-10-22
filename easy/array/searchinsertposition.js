var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};

var searchInsert2 = function(nums, target) {
    const index = nums.findIndex(num => num >= target);
    return index === -1 ? nums.length : index;
};

// Ví dụ sử dụng:
const nums1 = [1, 3, 5, 6];
const target1 = 5;
console.log(searchInsert(nums1, target1)); // Output: 2
