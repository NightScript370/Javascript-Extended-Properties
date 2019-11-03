/**
 * Replaces every instance of a b and a B in a string with the 🅱 emote.
 * @example "Hello everybone".toB() => "Hello every🅱one"
 * @returns {string}
 */
module.exports = function toB() {
	let target = this;
	return target
		.replace(/b/gi, "🅱")
		.replace(/B/gi, "🅱")
};