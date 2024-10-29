function containsDuplicate(nums) {
    const frequencyMap = nums.reduce((acc, num) => {
        if (acc[num]) {
            acc[num]++;
        } else {
            acc[num] = 1;
        }
        return acc;
    }, {});

    return Object.values(frequencyMap).some(count => count > 1);
}

// Ví dụ sử dụng:
const nums1 = [1, 2, 3, 4];
const nums2 = [1, 2, 3, 1];

console.log(containsDuplicate(nums1)); // Output: false
console.log(containsDuplicate(nums2)); // Output: true
