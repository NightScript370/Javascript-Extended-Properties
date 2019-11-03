/**
 * Replaces every instance of a b and a B in a string with the 🅱 emote.
 * @example "hi".toBinary() => "0110100001101001"
 * @returns {string}
 */
module.exports = function toBinary() {
	let target = this;
	return target.split('').map(str => {
		const converted = str.charCodeAt(0).toString(2);
		return `${'00000000'.slice(converted.length)}${converted}`;
	}).join('');
};