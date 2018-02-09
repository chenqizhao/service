const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const cookieSession = require('cookie-session')
const passport = require('passport')

// order is important
require('./models/User')
require( './services/passport'); 

// const authRoutes = require('./routes/authRoutes')

mongoose.connect(keys.mongoURI);
mongoose.connection.on('connected', function(){
	console.log('mlab connect success')
})
const app = express()

app.use(
	cookieSession({
		maxAge: 60 * 60 * 1000, // 60 min, unit is ms
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);








app.get('/', (req, res) => {
	res.send({hi : 'test'});
});

const PORT = process.env.PORT || 5000
app.listen(PORT);