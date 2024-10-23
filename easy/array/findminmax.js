function findMinMax(arr) {
    if (arr.length === 0) {
        return { min: null, max: null }; // Trả về null nếu mảng rỗng
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }

    return { min, max };
}

function findMinMax2(arr){
    const max = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));
    const min = numbers.reduce((accumulator, currentValue) => Math.min(accumulator, currentValue));
    return {min, max}
}

// Ví dụ sử dụng:
const array = [3, 5, 1, 9, 2, 8, -1, 4];
const { min, max } = findMinMax(array);
console.log("Số nhỏ nhất là:", min); // Output: -1
console.log("Số lớn nhất là:", max); // Output: 9
