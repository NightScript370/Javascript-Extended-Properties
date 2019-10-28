const { assertString } = require('../extra')

/**
 * Checks if a string is ASCII.
 * @example "HELLO".isAscii() => false
 * @returns {boolean}
 */
module.exports = function isAscii() {
	assertString(this);
	return /^[\x00-\x7F]+$/.test(this);
};