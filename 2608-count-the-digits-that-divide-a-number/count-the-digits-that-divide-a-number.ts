function countDigits(num: number) {
    let counter:number = 0;
    const numStr:string  = num.toString()
    for(let i = 0; i < numStr.length; i++){
        if(num % Number(numStr[i]) === 0){
            counter++;
        }
    }
    return counter;
};


// psuedocode:
// 1. create a counter variable to store the amount of times a number can be divided by its digits.
// 2. convert num to string.
// 3. loop through num string and divide each digit by itself, if it can be divided without remainder update the counter variable.
// 4. return counter variable