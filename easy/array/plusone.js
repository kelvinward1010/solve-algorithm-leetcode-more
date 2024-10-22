function plusOne(digits) {
    // let numberOne = Number(digits.join('')) + 1;
    // return numberOne.toString().split('').map(Number);
    
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}

// Ví dụ sử dụng:
const digits = [1, 2, 3];
console.log(plusOne(digits)); // Output: [1, 2, 4]

const digitsAllNines = [9, 9, 9];
console.log(plusOne(digitsAllNines)); // Output: [1, 0, 0, 0]
