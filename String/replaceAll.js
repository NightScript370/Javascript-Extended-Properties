/**
 * Replaces every instance of a string in a string with a replacement.
 * @example "Hello everyone".replaceAll("everyone", "world") => "Hello world"
 * @param {string} search
 * @param {string} replacement
 * @returns {string}
 */
module.exports = function replaceAll(search, replacement) {
	var target = this;
	let result = target;

	if (search instanceof Array) {
		for (var splitvar of search) {
			result = result.split(splitvar).join(replacement)
		}
	} else {
		result = result.split(search).join(replacement)
	}

	return result;
};