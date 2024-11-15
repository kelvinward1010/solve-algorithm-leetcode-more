function combinationSum(candidates, target) {
    const result = [];

    function backtrack(start, combination, currentSum) {
        if(currentSum === target){
            console.log(combination)
            result.push([...combination])
            return;
        }

        if(currentSum > target) return;

        for(let i = start; i < candidates.length; i++) {
            combination.push(candidates[i]);
            backtrack(i, combination, currentSum + candidates[i]);
            combination.pop();
        }
    }

    backtrack(0,[],0);
    return result;
};

console.log(combinationSum([2,3,6,7], 7))