function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


//random n numbers

function getRandomElements(arr, count) {
    // Tạo một bản sao của mảng để không thay đổi mảng gốc
    let arrayCopy = [...arr];
    let result = [];

    // Fisher-Yates shuffle
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }

    // Lấy các phần tử đầu tiên từ mảng đã xáo trộn
    result = arrayCopy.slice(0, count);

    return result;
}

// Ví dụ sử dụng:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberOfElements = 3; // Số phần tử cần chọn
const randomElements = getRandomElements(array, numberOfElements);
console.log("Các phần tử ngẫu nhiên được chọn là:", randomElements);
