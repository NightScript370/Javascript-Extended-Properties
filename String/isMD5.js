const { assertString } = require('../extra')

module.exports = function () {
	assertString(this);
	return /^[a-f0-9]{32}$/.test(this);
};