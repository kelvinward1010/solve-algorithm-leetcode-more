// use Set
function removeDuplicates(arr) {
    return [...new Set(arr)];
}


//Use for
function removeDuplicates(arr) {
    let unique = {};
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!unique[arr[i]]) {
            unique[arr[i]] = true;
            result.push(arr[i]);
        }
    }

    return result;
}

// use Filter

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Ví dụ sử dụng:
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]



