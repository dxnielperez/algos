function separateDigits(nums: number[]) {
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const digits = nums[i].toString().split('').map(Number);
        result.push(...digits);
    }
    return result;
}