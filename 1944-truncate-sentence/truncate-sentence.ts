function truncateSentence(s: string, k: number): string {
    const words = s.split(' ');
    return words.slice(0, k).join(' ');
};

    // psuedocode:
    // 1. Split the sentence s into an array of words using space as delimiter
    // 2. Select the first k words from the array
    // 3. Join the selected words into a string using space as separator
    // 4. Return the resulting truncated sentence