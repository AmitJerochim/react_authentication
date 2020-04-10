const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
class databaseManager{

	connect(){
		mongoose.connect('mongodb://localhost:27017/myapp22', 
			{useUnifiedTopology: true, useNewUrlParser: true});
		const db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function() {
 			console.log("successfully connected to mongoDB");// we're connected!
		});
	}

	disconnect(){
		mongoose.connection.close();
	}
}
const db= new databaseManager();
module.exports= db
