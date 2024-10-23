function singleNumber(nums) {
    let ojbArr = {};

    for(let i = 0; i < nums.length; i++) {
        if(ojbArr[nums[i]]){
            ojbArr[nums[i]]++;
        }else{
            ojbArr[nums[i]] = 1;
        }
    }

    for(let key in ojbArr){
        if(ojbArr[key] === 1) {
            return key;
        }
    }
};

console.log(singleNumber([4,2,4,4,2,5]))