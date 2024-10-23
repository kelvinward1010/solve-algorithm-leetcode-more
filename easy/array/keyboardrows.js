function findWords(words) {
    let newSet = [
        new Set('qwertyuiop'),
        new Set('asdfghjkl'),
        new Set('zxcvbnm'),
    ]

    const result = [];

    for(let word of words ){
        const lowerWord = word.toLowerCase();
        
        for (let i of newSet) {
            if ([...lowerWord].every(char => i.has(char))) {
                result.push(word);
                break;
            }
        } 
    }
    return result;
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]))