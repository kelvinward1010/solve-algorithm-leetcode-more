function isPalindrome(s) {
    // let splitStr = s.split('').filter(t => !/[.,;:]/.test(t)).join('').toLowerCase().split(' ').join('');
    if(s.length === 0) return true;
    let splitStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    for (let i = 0, j = splitStr.length - 1; i < j; i++, j--) {
        if (splitStr[i] !== splitStr[j]) {
            return false;
        }
    }

    return true;
};

const isPalindrome2 = (s) => {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return s === [...s].reverse().join('');
};

const isPalindrome3 = (s) => {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let reversed = s.split('').reduce((acc, char) => char + acc, '');
    return s === reversed;
};

console.log(isPalindrome3("A man, a plan, a canal: Panama"))