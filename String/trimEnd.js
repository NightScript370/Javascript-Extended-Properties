const { genRepl, getLength } = require('../extra')

module.exports = function (check, replace='') {
	if (typeof replace !== 'string')
	    replace = '';
	if (!check)
	    check = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/;
	if (check.flags &&
		check.constructor.name == 'RegExp' &&
		!(check.flags.includes('g')))
		check = new Function(
			'return' + check.toString() + 'g;'
		)();
	let string = this.toString();
	let add = 0;
    while (string.endsWith(check)) {
 	    add++
	    var length = string.length - getLength(string, check, 'left');
	    string = string.substr(0, length);
	};
	return string + genRepl(replace, add);
};