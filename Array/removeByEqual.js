module.exports = function (values, ignoreCaps=false) {
	if (typeof ignoreCaps !== 'boolean')
		throw new Error('Invalid string or option');

	let cleanarray = [];
	for (var string of this) {
		if (ignoreCaps)
			string = string.toLowerCase()

		if (Array.isArray(values)) {
			for (var value of values) {
				if (ignoreCaps)
					value = value.toLowerCase()

				if (string == value)
					continue;

				cleanarray.push(value)
			}
		} else {
			if (ignoreCaps)
				values = values.toLowerCase()

			if (string == values)
				continue;

			cleanarray.push(values)
		}
	}

	return cleanarray;
}