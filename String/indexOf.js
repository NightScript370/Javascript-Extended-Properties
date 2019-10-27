const { validateNumber } = require('../extra')

module.exports = function (check, index=0) {
	index = validateNumber(index);
	if (index < 0)
	    index = 0;
    var string = this.toString();
	if (typeof check == 'object' &&
		(check.constructor.name == 'RegExp')) {
		var key = (check.exec(
			string.substr(index)
		) || {}).index;
		if (key >= 0)
		    return key + index;
		return -1;
	};
    for (var i = 0; i < string.length; i++) {
        if (i >= index) {
            var str = string.substr(i, check.length);
            if (str == check)
            	return i;
        };
    };
    return -1;
};