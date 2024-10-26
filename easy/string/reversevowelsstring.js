function reverseVowels(s) {
    const vowels = "aeiouAEIOU";
    let arrStr = s.split('');
    let i = 0, j = arrStr.length - 1;
    while (i < j) {
        if(vowels.includes(arrStr[i]) && vowels.includes(arrStr[j])) {
            [arrStr[i], arrStr[j]] = [arrStr[j], arrStr[i]];
            i++;
            j--;
        }else if(!vowels.includes(arrStr[i])){
            i++;
        }else{
            j--;
        }
    }
    return arrStr.join('');
};


console.log(reverseVowels('leetcode'))