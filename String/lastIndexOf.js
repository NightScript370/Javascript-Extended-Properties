const { validateNumber } = require('../extra')

module.exports = function (check, index=0) {
    if (!check)
        return -1;
    if (check.flags &&
        check.constructor.name == 'RegExp' &&
        !(check.flags.includes('g')))
        check = new Function(
            'return' + check.toString() + 'g;'
        )();
    index = validateNumber(index);
    if (index < 0)
        index = 0;
    var string = this.toString()
        .substr(0, this.length - index);
    if (typeof check == 'object' &&
        (check.constructor.name == 'RegExp')) {
        var pattern = (string.match(check) || []).pop();
        if (!pattern)
            return -1;
        return string.lastIndexOf(pattern);
    };
    string = string.reverse();
    check = check.reverse();
    var key = string.indexOf(check);
    if (key == -1)
        return -1;
    key = (string.length - 1) - key;
    return key;
};