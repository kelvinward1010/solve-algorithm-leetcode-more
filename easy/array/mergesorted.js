function merge(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2);
    nums1.sort((a, b) => a - b);
};


// const nums1 = [1,2,3,0,0,0];
// const m = 3;
// const nums2 = [3,6,8];
// const n = 3;
// console.log(merge(nums1, m, nums2, n));


const mergeSortedAB = (arr1, arr2) => {
    const copyArr2 = [...arr2];

    // Sử dụng reduce để hợp nhất các phần tử của arr1 và arr2
    const result = arr1.reduce((result, item1) => {
        while (copyArr2.length && copyArr2[0] < item1) {
            result.push(copyArr2.shift());
        }
        result.push(item1);
        return result;
    }, []);

    // Kết hợp các phần tử còn lại của copyArr2 vào result
    return result.concat(copyArr2);
};

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const merged = mergeSortedAB(arr1, arr2);
console.log(merged); // Output: [1, 2, 3, 4, 5, 6]