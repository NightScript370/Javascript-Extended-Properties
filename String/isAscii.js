const { assertString } = require('../extra')

module.exports = function () {
	assertString(this);
	return /^[\x00-\x7F]+$/.test(this);
};