function getRandom() {
	try {
		const threeRandom = get3randomString(Array.from(document.querySelectorAll("#input-strings > li > input ")).map(x => x.value))
		document.getElementById("string1").textContent = threeRandom[0];
		document.getElementById("string2").textContent = threeRandom[1];
		document.getElementById("string3").textContent = threeRandom[2];
	} catch (error) {
		// There should be a proper error handling
		console.log(error);
	}
}

function addOption() {
	let li = document.createElement('li');
	li.appendChild(document.createElement('input'));
	document.getElementById('input-strings').appendChild(li);
}