function parallalelogramAreaByBase(base, height) {
    if (typeof base !== 'number' || isNaN(base) || base <= 0) {
        throw new Error('Invalid base');
    }
    if (typeof height !== 'number' || isNaN(height) || base <= 0) {
        throw new Error('Invalid height');
    }
    return base * height;
}
function parallalelogramAreaBySides(a, b, alpha) {
    if (typeof a !== 'number' || isNaN(a) || a <= 0) {
        throw new Error('Invalid side A');
    }
    if (typeof b !== 'number' || isNaN(b) || b <= 0) {
        throw new Error('Invalid side B');
    }
    if (typeof alpha !== 'number' || isNaN(alpha) || alpha <= 0 || alpha >= 180) {
        throw new Error('Invalid angle');
    }
    return a * b * Math.sin(alpha * (Math.PI / 180));
}
function calculateByHeight() {
    var b = Number(document.getElementById('base').value);
    var h = Number(document.getElementById('height').value);
    try {
        document.getElementById('area1').value = parallalelogramAreaByBase(b, h).toString();
        var canvas = document.getElementById('by-base');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var tilt = 20;
        var offset = 70;
        ctx.beginPath();
        ctx.moveTo(offset, offset);
        ctx.lineTo(b + offset, offset);
        ctx.lineTo(b + tilt + offset, h + offset);
        ctx.lineTo(tilt + offset, h + offset);
        ctx.closePath();
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
    catch (error) {
        document.getElementById('area1').value = error;
    }
}
function calculateByAngle() {
    var a = Number(document.getElementById('side-a').value);
    var b = Number(document.getElementById('side-b').value);
    var alpha = Number(document.getElementById('angle').value);
    try {
        document.getElementById('area2').value = parallalelogramAreaBySides(a, b, alpha).toString();
        var canvas = document.getElementById('by-angle');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var tilt = b * Math.cos(alpha * (Math.PI / 180));
        var h = b * Math.sin(alpha * (Math.PI / 180));
        var offset = 70;
        ctx.beginPath();
        ctx.moveTo(offset, offset);
        ctx.lineTo(a + offset, offset);
        ctx.lineTo(a + offset + tilt, h + offset);
        ctx.lineTo(tilt + offset, h + offset);
        ctx.closePath();
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
    catch (error) {
        document.getElementById('area2').value = error;
    }
}
document.body.onload = function () {
    calculateByHeight();
    calculateByAngle();
};
