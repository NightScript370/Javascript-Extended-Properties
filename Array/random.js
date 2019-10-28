
/**
 * Gets a random entry from an array.
 * @example ["Hello", "Hi"].random() => "Hi"
 * @returns {any}
 */

module.exports = function random() {
	return this[Math.floor(Math.random() * this.length)];
};