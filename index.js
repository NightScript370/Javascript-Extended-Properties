const fs = require('fs');
const path = require("path");

const { List } = require('list');

let curDirectory;
let scanSubDir;
let currentFile;
let currentFunction;

let mainDirScan = fs.readdirSync(path.join(__dirname))
	.filter(item => !item.includes('.'))

for (curDirectory of mainDirScan) {
	scanSubDir = fs.readdirSync(path.join(__dirname, curDirectory));

	for (currentFile of scanSubDir) {
		currentFunction = currentFile.split('.').pop().join('.')
		eval(`${curDirectory}.prototype['${currentFunction}'] = require('./${curDirectory}/${currentFile}')`);
	}
}