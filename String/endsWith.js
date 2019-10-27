const { validateNumber } = require('../extra')

module.exports = function (check, index=this.length) {
	if (typeof check == 'object' ||
 		(check.constructor.name == 'RegExp')) {
		check = check.toString();
		if (!check.split('/').slice(-1)[0].includes('g'))
			check += 'g';
		check = new Function('return '+check)();
 		var match = (this.match(check) || []).pop();
 		if (!match)
 		    return false;
 		return this.endsWith(match, index);
 	};
 	index = validateNumber(index);
 	check = check.toString();
 	if (index > this.length)
 	    index = this.length;
 	index -= check.length;
 	var pos = this.indexOf(check, index);
    return pos !== 1 && pos == index;
};