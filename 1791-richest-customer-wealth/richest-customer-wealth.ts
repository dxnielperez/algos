function maximumWealth(accounts: number[][]): number {
       let maxWealth: number = 0;

    for (let i = 0; i < accounts.length; i++) {
        let currentWealth: number = 0;

        for (let j = 0; j < accounts[i].length; j++) {
            currentWealth += accounts[i][j];
        }

        if (currentWealth > maxWealth) {
            maxWealth = currentWealth;
        }
    }

    return maxWealth;
};

/* 
pseudocode:
1. iterate through each customer in the accounts array.
2. for each customer, iterate through their accounts and calculate the wealth by summing up the amounts.
3. compare the current customer's wealth with the maximum wealth encountered so far, updating maxWealth if necessary.
4. after iterating through all customers, the final value of maxWealth will be the wealth of the richest customer.
5. return the maximum wealth as the result.
 */