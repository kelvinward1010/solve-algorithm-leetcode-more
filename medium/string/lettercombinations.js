// BFS - Breadth-First Search
function letterCombinations(digits){
    if(!digits) return [];

    const phoneMap ={
        '2': 'abc',
        '3': 'def',
        '4': 'ghi', 
        '5': 'jkl', 
        '6': 'mno', 
        '7': 'pqrs', 
        '8': 'tuv', 
        '9': 'wxyz'
    }
    
    // Dùng for dễ hiểu hơn nhưng hơi dài...
    //Độ phức tạp: O(4^n) với n là số lượng chữ số trong chuỗi.
    // let result = [''];
    // for(const digit of digits){
    //     const nextResult = [];
    //     for(const combination of result){
    //         for(const letter of phoneMap[digit]){
    //             nextResult.push(combination + letter)
    //         }
    //     }
    //     result.splice(0, result.length, ...nextResult)
    // }
    // return result;


    // Đệ quy
    // const result = [];
    // function backtrack(index, path) {
    //     if (path.length === digits.length) {
    //         result.push(path);
    //         return;
    //     }
        
    //     for (const char of phoneMap[digits[index]]) {
    //         backtrack(index + 1, path + char);
    //     }
    // }
    // backtrack(0, '');
    // return result;
    


    //Dùng reduce 
    /* Độ phức tạp O(k^n) 
    k: số chữ tối đa cho mỗi chữ số.
    n là độ dài của digits 
    */
    const allResult = digits.split('').reduce((result, digit) => {
        const nextResult = [''];
        result?.forEach(combination => {
            phoneMap[digit].split('').forEach(char => {
                if((combination + char)?.length === digits?.length){
                    nextResult.push(combination + char)
                }
            })
        });
        return nextResult;
    },[''])
    
    // O(m)
    return allResult;
    //return digits.length > 1 ? allResult.filter(combination => combination?.length == digits?.length) : allResult.slice(1);
}


console.log(letterCombinations('23'))