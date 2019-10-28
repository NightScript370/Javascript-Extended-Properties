
/**
 * Gets a random character from a string.
 * @example "HELLO".random() => "H"
 * @returns {string}
 */

module.exports = function random() {
	let stringSplit = this.split('')
	return stringSplit[Math.floor(Math.random() * stringSplit.length)];
};