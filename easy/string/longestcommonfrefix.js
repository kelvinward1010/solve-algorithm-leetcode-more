var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    // return strs.reduce((prefix, str) => {
    //     while (str.indexOf(prefix) !== 0) {
    //         prefix = prefix.substring(0, prefix.length - 1);
    //         if (prefix === "") return "";
    //     }
    //     return prefix;
    // }, strs[0]);

    let prefix = strs[0];
    for (let i = 0; i < prefix.length; i++) {
        if (!strs.every(str => str[i] === prefix[i])) {
            return prefix.slice(0, i);
        }
    }
    return prefix;
};

// Ví dụ sử dụng:
const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); // Output: "fl"
