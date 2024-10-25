var convertToTitle = function(n) {
    let result = '';
    while (n > 0) {
        n--; // Giảm giá trị n đi một đơn vị
        result = String.fromCharCode((n % 26) + 65) + result; // Chuyển đổi thành ký tự và thêm vào chuỗi kết quả
        n = Math.floor(n / 26); // Chia n cho 26
    }
    return result;
};

// Ví dụ sử dụng:
console.log(convertToTitle(1)); // Output: "A"
console.log(convertToTitle(28)); // Output: "AB"
console.log(convertToTitle(701)); // Output: "ZY"
