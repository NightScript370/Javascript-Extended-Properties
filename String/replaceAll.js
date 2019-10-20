module.exports = function (search, replacement) {
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