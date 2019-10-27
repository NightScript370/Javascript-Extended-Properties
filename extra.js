let MAX_SAFE_INTEGER = 9007199254740991;

exports.isFinite = (value) => !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity)
exports.isSafeNumber = (value) => typeof value === 'number' && Math.abs(value) <= MAX_SAFE_INTEGER
exports.assertString = (input) => {
	if (typeof input === 'string' || input instanceof String)
		return;

	let invalidType;
	if (input === null)
		invalidType = 'null';
	else {
		invalidType = typeof input;

		if (invalidType === 'object' && input.constructor && input.constructor.hasOwnProperty('name'))
			invalidType = input.constructor.name;
		else
			invalidType = `a ${invalidType}`;
	}

	throw new TypeError(`Expected string but received ${invalidType}.`);
}