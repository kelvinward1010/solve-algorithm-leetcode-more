function findDuplicates(arr) {
    let frequency = {};
    let duplicates = [];

    // Đếm tần số xuất hiện của mỗi phần tử
    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            frequency[arr[i]]++;
        } else {
            frequency[arr[i]] = 1;
        }
    }

    // Tìm các phần tử xuất hiện hơn một lần
    for (let key in frequency) {
        if (frequency[key] > 1) {
            duplicates.push(Number(key));
        }
    }

    return duplicates;
}

// Ví dụ sử dụng:
const array = [1, 2, 3, 4, 2, 5, 6, 7, 8, 3, 9, 10];
const duplicates = findDuplicates(array);
console.log("Các số trùng lặp là:", duplicates); // Output: [2, 3]
