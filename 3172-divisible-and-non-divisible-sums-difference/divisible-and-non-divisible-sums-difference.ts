function differenceOfSums(n: number, m: number): number {
   const sumNotDivisible = Array.from({ length: n }, (_, i) => i + 1)
        .filter((num) => num % m !== 0)
        .reduce((acc, num) => acc + num, 0);
    
    const sumDivisible = Array.from({ length: n }, (_, i) => i + 1)
        .filter((num) => num % m === 0)
        .reduce((acc, num) => acc + num, 0);

    return sumNotDivisible - sumDivisible; 
};