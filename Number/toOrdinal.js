const { isFinite, isSafeNumber } = require('../extra')

module.exports = function () {
	if (!isFinite(this))
		throw new TypeError(`Not a finite number: ${number} (${typeof number})`);

	if (!isSafeNumber(this))
		throw new RangeError('Input is not a safe number, it’s either too large or too small.');

	var str = String(this);
	var lastTwoDigits = Math.abs(num % 100);
	var betweenElevenAndThirteen = lastTwoDigits >= 11 && lastTwoDigits <= 13;
	var lastChar = str.charAt(str.length - 1);
	return str + (betweenElevenAndThirteen ? 'th'
			: lastChar === '1' ? 'st'
			: lastChar === '2' ? 'nd'
			: lastChar === '3' ? 'rd'
			: 'th');
};