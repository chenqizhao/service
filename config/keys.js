
if (process.env.NODE_ENV == 'production') {
	// the production version
	module.exports = require('./prod');
} else {
	// the dev version
	module.exports = require('./dev');
}

