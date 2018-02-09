const passport = require( 'passport' )

module.exports = app => {
	app.get(
			'/auth/google', 
			passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);	

	app.get('/auth/google/callback', passport.authenticate('google'))	

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send('success logout');
	})

	app.get('/api/current_user', (req, res) => { // req is incoming request, res is outgoing response
		res.send(req.user);
	});
};
