const { validateNumber } = require('../extra')

module.exports = function (check, index=0) {
    index = validateNumber(index);
    var string = this.toString();
    var key = string.indexOf(check, index);
    return key !== -1;
};   