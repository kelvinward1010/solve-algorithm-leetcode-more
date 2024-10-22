// function removeElement(nums, val) {
//     const remove = nums.filter((i) => i !== Number(val));
//     return remove.length;
// };

function removeElement2(nums, val) {
    let k = 0;
    let i = 0;

    // for(i; i < nums.length; i++) {
    //     if(nums[i] !== val){
    //         nums[k] = nums[i]
    //         k++;
    //     }
    // }

    // while (i < nums.length) {
    //     if(nums[i] !== val){
    //         nums[k] = nums[i]
    //         k++;
    //     }
    //     i++
    // }

    nums.reduce((accumulator, currentValue) => {
        if (currentValue !== val) {
          accumulator[k] = currentValue;
          k++;
        }
        return accumulator;
    }, []);
    
    return k;
};

console.log(removeElement2([3,2,2,3], 3))