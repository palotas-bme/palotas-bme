function get3randomString(inputStrings) {
    if (!Array.isArray(inputStrings)) {
        throw new Error('Input is not an array.');
    }
    inputStrings.forEach(function (s) {
        if (typeof s !== 'string') {
            throw new Error('Not all elements of the input is string.');
        }
    });
    return inputStrings.sort(function () { return 0.5 - Math.random(); }).slice(0, 3);
}
