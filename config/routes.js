module.exports = function (app, io, ss) {

	var fs = require('fs'),
		path = require('path'),
		main = require('../app/controllers/main'),
		s_obj = require('../config/sockets');

	s_obj.init(io);
	s_obj.initSS(ss);

	app.get('/lectures', main.lectures)
	app.get('/blog', main.blog)
	app.get('/senate', main.senate)
	app.get('/community', main.community)
	app.get('/*', main.home)
}