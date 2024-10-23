function findContentChildren(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let childIndex = 0;
    return s.reduce((count, cookie) => {
        if (childIndex < g.length && cookie >= g[childIndex]) {
            count++;
            childIndex++;
        }
        return count;
    }, 0);
};

// Ví dụ sử dụng:
const g = [1,2];
const s = [1,2,3];
console.log(findContentChildren(g, s)); // Output: 1