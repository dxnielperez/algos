function subtractProductAndSum(n: number) {
    let product: number = 1;
    let sum: number = 0;
    const num: string = n.toString();
    const digits:number = num.length;

for(let i = 0; i < digits; i++){
    product *= Number(num[i])
    sum += Number(num[i])
}
return product - sum;

};

/**
psuedocode:
1. Initialize variables for the product, sum, and number of digits in the given number.
2. Convert the given number to a string and assign it to a variable.
3. Loop through each digit in the string representation of the number:
    3a. Multiply each digit and update the product variable.
    3b. Add each digit and update the sum variable.
4. Calculate the difference between the product and the sum.
5. Return the result.
 */