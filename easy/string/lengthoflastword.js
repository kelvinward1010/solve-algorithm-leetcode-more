function lengthOfLastWord(s) {
    const t = s.split(' ').filter(word => word.length > 0);
    return t[t.length-1].split('').length;
};