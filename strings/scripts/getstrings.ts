function get3randomString(inputStrings: string[]): string[] {
    if (!Array.isArray(inputStrings)) {
        throw new Error('Input is not an array.');
    }
    inputStrings.forEach((s) => {
        if (typeof s !== 'string') {
            throw new Error('Not all elements of the input is string.');
        }
    });
    return inputStrings.sort(() => 0.5 - Math.random()).slice(0, 3);
}
