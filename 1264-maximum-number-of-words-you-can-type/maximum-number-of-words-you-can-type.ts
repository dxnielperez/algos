function canBeTypedWords(text: string, brokenLetters: string): number {
    const words = text.split(' ');
    const brokenSet = new Set(brokenLetters.split(''));
    let count = 0;

    for (let word of words) {
        let isBroken = false;
        for (let char of word) {
            if (brokenSet.has(char)) {
                isBroken = true;
                break;
            }
        }
        if (!isBroken) {
            count++;
        }
    }

    return count;
}

