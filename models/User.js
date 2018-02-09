const mongoose = require('mongoose')
// const Schema = mongoose.Schema  this is same as following
const { Schema } = mongoose

const userSchema = new Schema({
	googleId: String
	
})

mongoose.model('users', userSchema)