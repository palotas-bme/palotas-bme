function calculateByHeight() {
    const b = Number(document.getElementById('base').value);
    const h = Number(document.getElementById('height').value);
    try {
        document.getElementById('area1').value = parallalelogramAreaByBase(b, h);

        var canvas = document.getElementById('by-base');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const tilt = 20;
        const offset = 70;

        ctx.beginPath();
        ctx.moveTo(offset, offset);
        ctx.lineTo(b + offset, offset);
        ctx.lineTo(b + tilt + offset, h + offset);
        ctx.lineTo(tilt + offset, h + offset);
        ctx.closePath();
        ctx.fillStyle = 'white';
        ctx.strokestyle = 'black';
        ctx.stroke();
    } catch (error) {
        document.getElementById('area1').value = error;
    }
}

function calculateByAngle() {
    const a = Number(document.getElementById('side-a').value);
    const b = Number(document.getElementById('side-b').value);
    const alpha = Number(document.getElementById('angle').value);
    try {
        document.getElementById('area2').value = parallalelogramAreaBySides(a, b, alpha);

        var canvas = document.getElementById('by-angle');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

		const tilt = b * Math.cos(alpha * (Math.PI / 180));
		const h = b * Math.sin(alpha * (Math.PI / 180));
		
        const offset = 70;

        ctx.beginPath();
        ctx.moveTo(offset, offset);
        ctx.lineTo(a + offset, offset);
        ctx.lineTo(a + offset + tilt,  h + offset);
        ctx.lineTo(tilt + offset, h + offset);
        ctx.closePath();
        ctx.fillStyle = 'white';
        ctx.strokestyle = 'black';
        ctx.stroke();
    } catch (error) {
        document.getElementById('area2').value = error;
    }
}

document.body.onload = () => {
    calculateByHeight();
    calculateByAngle();
};
