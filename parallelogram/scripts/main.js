function calculateByHeight() {
	const b = Number(document.getElementById('base').value);
	const h = Number(document.getElementById('height').value);
	try {
		document.getElementById('area1').value = parallalelogramAreaByBase(b, h);
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
	} catch (error) {
		document.getElementById('area2').value = error;
	}
}

document.body.onload = () => {
	calculateByHeight();
	calculateByAngle();
};