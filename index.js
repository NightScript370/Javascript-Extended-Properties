const fs = require('fs');
const path = require("path");

const { List } = require('list');
const { inspect } = require('util')

let curDirectory;
let scanSubDir;
let currentFile;
let currentFunction;

let mainDirScan = fs.readdirSync(path.join(__dirname))
	.filter(item => !item.includes('.'))

for (curDirectory of mainDirScan) {
	scanSubDir = fs.readdirSync(path.join(__dirname, curDirectory));

	for (currentFile of scanSubDir) {
		currentFunction = inspect(currentFile.split('.').slice(0, -1).join('.'));
		eval(`
			if (!${curDirectory}.prototype.${currentFuntion})
				Object.defineProperty(${curDirectory}.prototype, "${currentFunction}", { value: require('./${curDirectory}/${currentFile}'), enumerable: false});
		`);
	}
}
