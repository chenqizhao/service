const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const cookieSession = require('cookie-session')
const passport = require('passport')

const bodyParser = require('body-parser')

// order is important
require('./models/User')
require('./services/passport')
require('./models/Survey')


// const authRoutes = require('./routes/authRoutes')

mongoose.connect(keys.mongoURI);
mongoose.connection.on('connected', function(){
	console.log('mlab connect success')
})
const app = express()
app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 60 * 60 * 1000, // 60 min, unit is ms
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);


if (process.env.NODE_ENV == 'production') {
	// express will serve up production assets
	// like our main.js file
	app.use(express.static('client/build'));
	// express will serve up index.html
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	}); 
}


const PORT = process.env.PORT || 5000
app.listen(PORT);