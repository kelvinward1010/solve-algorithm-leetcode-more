function merge(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2);
    nums1.sort((a, b) => a - b);
};


const nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [3,6,8];
const n = 3;
console.log(merge(nums1, m, nums2, n));