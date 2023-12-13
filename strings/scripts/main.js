function getRandom() {
	try {
		console.log(document.querySelectorAll("#input-strings > li > input "))
		const threeRandom = get3randomString(Array.from(document.querySelectorAll("#input-strings > li > input ")).map(x => x.value))
		document.getElementById("string1").innerText = threeRandom[0];
		document.getElementById("string2").innerText = threeRandom[1];
		document.getElementById("string3").innerText = threeRandom[2];
	} catch (error) {
		console.log(error);
	}
}

function addOption() {
	let li = document.createElement('li');
	li.appendChild(document.createElement('input'));
	document.getElementById('input-strings').appendChild(li);
}