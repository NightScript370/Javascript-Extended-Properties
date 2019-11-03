/**
 * Mock someone's words. Can be randomized or not
 * @example "hi".mock() => "hI"
 * @returns {string}
 */
module.exports = function mock(random=true) {
	let target = this;
	let result = "";

	if (random) {
		result = target.split("").map(char => Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()).join("")
	} else {
		let chars = target.split("");
		for (let i = 0; i < chars.length; i++) {
			result += i % 2 == 0 ? chars[i].toUpperCase() : chars[i].toLowerCase();
		}
	}

	return result;
};