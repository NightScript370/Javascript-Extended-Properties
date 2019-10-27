module.exports = function(check, replace) {
	var string = this.toString()
	    .trimEnd(check, replace)
	    .trimStart(check, replace)
	return string;
};