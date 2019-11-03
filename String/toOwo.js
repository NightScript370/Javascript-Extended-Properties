module.exports = function toOwo() {
	let target = this;
	return target
		.replace(/speak/g, 'spweak')
		.replace(/need/g, 'nweed')
		.replace(/stand/g, 'stwand')
		.replace(/[rl]/gm, "w")
		.replace(/[RL]/gm, "W")
		.replace(/ove/g, 'uv');
};