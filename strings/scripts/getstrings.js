function get3randomString(inputStrings) {
    if (!Array.isArray(inputStrings)) {
        throw new Error('Input is not an array.');
    }
    if (inputStrings.length < 3) {
        throw new Error('The input length is too short.');
    }
    inputStrings.forEach(function (s) {
        if (typeof s !== 'string') {
            throw new Error('Not all elements of the input is string.');
        }
    });
    return inputStrings.sort(function () { return 0.5 - Math.random(); }).slice(0, 3);
}
function getRandom() {
    try {
        var threeRandom = get3randomString(Array.from(document.querySelectorAll('#input-strings > li > input ')).map(function (x) { return x.value; }));
        document.getElementById('string1').textContent = threeRandom[0];
        document.getElementById('string2').textContent = threeRandom[1];
        document.getElementById('string3').textContent = threeRandom[2];
    }
    catch (error) {
        console.log(error);
    }
}
function addOption() {
    var li = document.createElement('li');
    li.appendChild(document.createElement('input'));
    document.getElementById('input-strings').appendChild(li);
}
