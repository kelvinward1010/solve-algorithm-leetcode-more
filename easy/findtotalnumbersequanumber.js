function findPairsWithSum(arr, targetSum) {
    const pairs = [];
    const numMap = {};

    for (let num of arr) {
        const complement = targetSum - num;
        if (numMap[complement]) {
            pairs.push([num, complement]);
        }
        numMap[num] = true;
    }

    return pairs;
}

// Ví dụ sử dụng:
const array = [1, 2, 3, 6, 7, 8, 9, 10];
const targetSum = 10;
const pairs = findPairsWithSum(array, targetSum);
console.log("Các cặp có tổng bằng", targetSum, "là:", pairs);
