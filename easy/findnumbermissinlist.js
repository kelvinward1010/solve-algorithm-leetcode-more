function findMissingNumber(arr) {
    const n = 100;
    const expectedSum = (n * (n + 1)) / 2; // Tổng của các số từ 1 đến 100
    const actualSum = arr?.reduce((sum, num) => sum + num, 0); // Tổng các phần tử trong mảng
    return expectedSum - actualSum; // Số còn thiếu
}

function createArray() {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        if(i == 30) continue;
        arr.push(i);
    }
    return arr;
}
// Ví dụ sử dụng:
const array = createArray();
const missingNumber = findMissingNumber(array);
console.log("Số còn thiếu là:", missingNumber);
