/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function (nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k++;
        }

    }
    nums.length = k;
    return k;
};


// 1. loop through the length of nums array.
// 2. if the number at i index equals val remove number at i.
// 3. return new array