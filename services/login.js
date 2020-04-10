const User = require('../User.js');
const mongoose = require('mongoose');
const config = require('../config');
const jwt = require('jsonwebtoken');
const login = function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
				
    if (username && password) {
			User.findOne()
			.where('username').equals(username)
			.exec( (err,user) => {console.log(user.username + user.password)
			
      if (username === user.username && password === user.password) {
  	  
      let token = jwt.sign({username: user.username},
          config.secret,
          { expiresIn: '24s' // expires in 24 hours
          }
        );

      // return the JWT token for the future API calls
        res.json({
          success: true,
          message: 'Authentication successful!',
          token: token
        });
    } else {
        res.status(403).json({
          success: false,
          message: 'Incorrect username or password'
        });
      } 
			
			});

    } else {
      res.status(400).json({
        success: false,
        message: 'Authentication failed! Please check the request'
      });
    }
  }

module.exports ={login}
