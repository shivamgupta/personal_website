var path = require('path'),
	root = path.normalize(__dirname + '/..');

module.exports = {
	dev_mode : {
		root 	: root,
		app		: {
			name	: 'test db : development mode'
		}
	}
}