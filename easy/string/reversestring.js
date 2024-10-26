function reverseString(s) {
    //s.reverse();

    let left = 0;
    let right = s.length -1;
    while(right > left) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--
    }
};

reverseString(["h","e","l","l","o"])