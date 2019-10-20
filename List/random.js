const { length, list, nth, List } = require("list")

module.exports = function () {
	return nth(Math.floor(Math.random() * length(this)), this)
}