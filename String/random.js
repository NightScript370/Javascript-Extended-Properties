module.exports = function() {
	let stringSplit = this.split('')
	return stringSplit[Math.floor(Math.random() * stringSplit.length)];
};