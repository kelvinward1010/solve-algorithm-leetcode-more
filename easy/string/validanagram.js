function isAnagram(s, t) {
    if( s.length !== t.length) return false;

    //return s.split('').sort().join('') === t.split('').sort().join('');

    const count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
};

console.log(isAnagram('anagram', 'nagaram'))