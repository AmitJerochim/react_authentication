const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const db = require('./db-manager.js');

const UserSchema = new mongoose.Schema({ 
		//username: String
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true}, 
		email:{ 
			type:String,
			validate:{
				validator: function(v){
					return /[0-9][0-9][0-9]/.test(v);
				},
				message: props => `${props.value} is not a valid phone number!` 
			}
	 }
});

UserSchema.plugin(uniqueValidator);

const User = mongoose.model('User', UserSchema);
module.exports = User;
