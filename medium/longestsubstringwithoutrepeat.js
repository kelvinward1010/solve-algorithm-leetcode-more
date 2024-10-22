var lengthOfLongestSubstring = function(s) {
    let left = 0, right = 0, maxLen = 0;
    let seen = new Set();
    
    while (right < s.length) {
        if (!seen.has(s[right])) {
            seen.add(s[right]);
            maxLen = Math.max(maxLen, seen.size);
            right++;
        } else {
            seen.delete(s[left]);
            left++;
        }
    }
    
    return maxLen;
};


const str = "abcabcbb";
console.log(lengthOfLongestSubstring(str));