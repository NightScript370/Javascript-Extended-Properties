let MAX_SAFE_INTEGER = 9007199254740991;

exports.genRepl = (string, count) => {
	let str = '';
	for (var i = 0; i < count; i++)
		str += string;
	return str;
};
exports.getLength = (string, check, type='right') => {
	let typeOf = 'regexp';
	if (typeof check !== 'object' ||
		(check.constructor.name !== 'RegExp')) {
		check = check.toString();
		typeOf = 'string';
	};
	switch(type) {
		case 'right':
		    if (!string.startsWith(check))
		        return 0;
		    if (typeOf == 'regexp')
		        return string.match(check)
		            .shift()
		            .length;
		    return check.length;
		case 'left':
		    if (!string.endsWith(check))
		        return 0;
		    if (typeOf == 'regexp')
		        return string.match(check)
		            .pop()
		            .length;
		    return check.length;
	};
};
exports.isFinite = value => !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity)
exports.isSafeNumber = value => typeof value === 'number' && Math.abs(value) <= MAX_SAFE_INTEGER
exports.assertString = input => {
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
};
exports.validateNumber = number => {
	if (number == null ||
		typeof number == 'undefined')
		return 0;
	number = parseInt(number.toString());
	if (number.toString() == 'NaN')
	    return 0;
	if (number.toString().split('.').length > 1)
	    return Math.floor(number);
	return number;
};