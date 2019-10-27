const { validateNumber } = require('../extra')

module.exports = function (check, index=0) {
	index = validateNumber(index);
	var str = this.toString().substr(index);
 	if (typeof check == 'object' ||
 		(check.constructor.name == 'RegExp')) {
 		var object = check.exec(str) || {};
 		if (object.index == 0)
 		    return true;
 		return false;
 	};
 	check = check.toString();
 	str = str.substr(0, check.length);
 	if (str == check)
 	    return true;
 	return false;
};