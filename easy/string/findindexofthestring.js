function strStr(haystack, needle) {
    if(needle === '') return 0;
    
    // return haystack.split('').reduce((acc, curr, i) => {
    //     if(haystack.slice(i).startsWith(needle)){
    //         return 0;
    //     }
    //     return acc;
    // },-1);

    // for (let i = 0; i <= haystack.length - needle.length; i++) {
    //     if (haystack.substring(i, i + needle.length) === needle) {
    //         return 0;
    //     }
    // }
    // return -1;

    return haystack.indexOf(needle);
};

console.log(strStr("sadbutsad", "sad"))