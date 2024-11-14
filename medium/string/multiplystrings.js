function multiply(num1, num2) {
    // return String(Number(num1)*Number(num2))
    const n1 = BigInt(num1); 
    const n2 = BigInt(num2); 
    const product = n1 * n2; 
    return product.toString();
};


console.log("3","4")