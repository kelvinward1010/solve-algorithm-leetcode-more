function containsDuplicate(nums) {
    // const frequencyMap = nums.reduce((acc, num) => {
    //     if (acc[num]) {
    //         acc[num]++;
    //     } else {
    //         acc[num] = 1;
    //     }
    //     return acc;
    // }, {});

    // return Object.values(frequencyMap).some(count => {
    //     if(count > 1) return true;
    //     else return false;
    // });

    const set = new Set();

    for (const num of nums) {
        if (set.has(num)) return true;

        set.add(num);
    }

    return false;
}

// Ví dụ sử dụng:
const nums1 = [1, 2, 3, 4];
const nums2 = [1, 2, 3, 1];

console.log(containsDuplicate(nums1)); // Output: false
console.log(containsDuplicate(nums2)); // Output: true
