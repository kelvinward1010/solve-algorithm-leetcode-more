function reverseNumber(num) {
    // const reversed = parseInt(num.toString().split('').reverse().join(''), 10);
    // return Math.sign(num) * reversed;

    let str = num.toString();
    const negative = str[0] === '-';
    if(negative){
        str = str.slice(1);
    }

    const output = parseInt(str.split('').reverse().join(''), 10) * (negative ? -1 : 1);
    if (output >= 2 ** 31 || output < -1 * 2 ** 31) {
        return 0;
    }
    return output;
}

// Ví dụ sử dụng:
const number = -12345;
const reversedNumber = reverseNumber(number);
console.log("Số sau khi đảo ngược là:", reversedNumber); // Output: 54321
