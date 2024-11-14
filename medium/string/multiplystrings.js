function multiply(num1, num2) {
    // return String(Number(num1)*Number(num2))
    const n1 = BigInt(num1); 
    const n2 = BigInt(num2); 
    const product = n1 * n2; 
    return product.toString();
};


console.log(multiply("3","4"))


/*
Độ phức tạp thời gian: O(1) cho các phép toán đơn giản, nhưng phụ thuộc vào độ lớn của số.
Rất hiệu quả cho các bài toán lớn nếu môi trường hỗ trợ BigInt.
*/