function finalValueAfterOperations(operations: string[]): number {
    let count = 0;
    for (let i of operations) {
        if (i === "X++" || i === "++X") {
            count++;
        }
        else {
            count--;
        }
    }
    return count;
};