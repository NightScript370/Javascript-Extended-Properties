module.exports = function() {
	let returnString = "";

	for (let i = 0; i < this.length; i++) {
		let c = this.charCodeAt(i);

		if(c >= 0x3041 && c <= 0x3096)
			c += 96;

		returnString += String.fromCharCode(c);
	}

	return returnString;
}
