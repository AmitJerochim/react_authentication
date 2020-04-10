const mongoose = require("mongoose");
const db = require('./db-manager.js');
const User = require('./User.js');
db.connect();
const admin= new User({username:"admin",password:"123"  });
//const admin= new User({});
admin.save((err)=>{
	if(err) throw err;
	User.find({},(err,users)=>{console.log(users);
		db.disconnect();
	});
});

//User.deleteMany({username:"anika"},(err)=>{});
/*
User.findOne({},(err, user)=>{
		//User.findByIdAndDelete({_id:user._id},(err)=>{}); 
////		User.deleteOne({username:'anika'},(err)=>{if(err){console.log(err);}});

	User.findByIdAndUpdate(
		{_id:user._id},
		{username:'amit, anika, joni'},
		(err)=>{
			User.find({},(err,users)=>{console.log(users)});
		}
	);

});
*/

