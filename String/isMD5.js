const { assertString } = require('../extra')

/**
 * Checks if a string is MD5.
 * @example "HELLO".isMD5() => false
 * @returns {boolean}
 */
module.exports = function isMD5 () {
	assertString(this);
	return /^[a-f0-9]{32}$/.test(this);
};