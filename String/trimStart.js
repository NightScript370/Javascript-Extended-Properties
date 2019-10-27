const { genRepl, getLength } = require('../extra')

module.exports = function (check, replace='') {
	if (typeof replace !== 'string')
	    replace = '';
	if (!check)
	    check = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/;
	if (check.flags &&
		check.constructor.name == 'RegExp' &&
		(check.flags.includes('g'))) {
		check = check.toString().split('/');
		var flags = check.pop()
		    .replace(/g/g, '');
		check = new Function(
			'return' + check.join('/') + '/' + flags + ';'
		)();
	};
	let string = this.toString();
	let add = 0;
	while (string.startsWith(check)) {
		add++
	    var length = getLength(string, check, 'right');
	    string = string.substr(length);
	};
	return genRepl(replace, add) + string;
};