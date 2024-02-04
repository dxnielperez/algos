function runningSum(nums: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            result.push(nums[i]); 
        } else {
            result.push(nums[i] + result[i - 1]);  
        }
    }
    return result;
}

/*
pseudocode:
1. initialize a new empty array.
2. iterate through each element in the array.
    2a. Add the current element with the previous elements.
3. return the array.
 */