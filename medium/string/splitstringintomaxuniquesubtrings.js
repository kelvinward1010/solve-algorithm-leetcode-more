function maxUniqueSplit(s) {
    let maxCount = 0;
    let result = [];

    function helper(substring, set){
        if(substring.length === 0) {
            if(set.size > maxCount) {
                maxCount = set.size;
            }
            return;
        }

        for(let i = 1; i <= substring.length; i++) {
            const part = substring.slice(0, i);
            if(!set.has(part)) {
                set.add(part);
                helper(substring.slice(i), set);
                set.delete(part);
            }
        }
    }
    helper(s, new Set());
    return { maxCount };
};

const stringtest = "ababccc";
console.log(maxUniqueSplit(stringtest))