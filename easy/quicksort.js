function quicksort(arr) {
    if (arr.length <= 1) {
        return arr; // Nếu mảng có 1 phần tử hoặc ít hơn thì trả về chính nó
    }

    const pivot = arr[Math.floor(arr.length / 2)]; // Chọn phần tử pivot ở giữa mảng
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue; // Bỏ qua phần tử pivot

        if (arr[i] < pivot) {
            left.push(arr[i]); // Phần tử nhỏ hơn pivot vào mảng trái
        } else {
            right.push(arr[i]); // Phần tử lớn hơn hoặc bằng pivot vào mảng phải
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)]; // Đệ quy sắp xếp mảng trái và phải, sau đó nối lại
}

// Ví dụ sử dụng:
const array = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quicksort(array);
console.log(sortedArray); // Output: [1, 1, 2, 3, 6, 8, 10]
