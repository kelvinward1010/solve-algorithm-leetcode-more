function minStringLength(s) {
    while (s.includes('AB') || s.includes('CD')) {
        s = s.replace('AB', '');
        s = s.replace('CD', '');
    }
    return s.length;
}

function minLength(s) {
    let array = s.split("")

    for(let i = 0; i < array.length - 1; i++){
        if((array[i] == "A" && array[i + 1] == "B") || (array[i] == "C" && array[i + 1] == "D")){
            array.splice(i, 2)
            i = i - 2
        }
    }

    return array.length
};

// Ví dụ sử dụng:
const s = "ABFCACDB";
console.log(minLength(s)); // Output: 2
