/**
 * Get three random element of an array of strings.
 * 
 * @param inputStrings Array of strings.
 * @returns Three string from the input in an array.
 */
function get3randomString(inputStrings: string[]): string[] {
    if (!Array.isArray(inputStrings)) {
        throw new Error('Input is not an array.');
    }
    if (inputStrings.length < 3) {
        throw new Error('The input length is too short.');
    }
    inputStrings.forEach((s) => {
        if (typeof s !== 'string') {
            throw new Error('Not all elements of the input is string.');
        }
    });
    
    // Using random value between -0.5 and 0.5 as a comparator is
    // eseentially sorting the array in a random order. Then we 
    // take the forst three element of it.
    return inputStrings.sort(() => 0.5 - Math.random()).slice(0, 3);
}
