/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema: true,

  attributes: {

    userName : { type: 'string', required: true, primaryKey: true, unique: true, size:15 },

    firstName : { type: 'string', size: 25 },

    lastName : { type: 'string', size: 25 },

    email : { type: 'string', required: true, email: true  },

    passWord : { type: 'string', required: true  },
    
    reports : { collection: 'Report' },

    gender : { type: 'string', enum: ['male','female'] },

    email : { type: 'string', required: true, email: true  },

    passWord : { type: 'string', required: true  },
    
    email : { type: 'string', required: true, email: true  },

    passWord : { type: 'string', required: true  },
    
    isAdmin : { type: 'boolean', defaultsTo: false }
    
  }, 

  beforeValidate : function(values, next){
  	if(!values.passWord){
  		return next({err: "Password is required"});
  	}

  	require('bcrypt').hash(values.passWord, 10, function encryptedPassword(err, hashedPassword){
  		if (err) { 
  			return next(err);
  		}

  		values.passWord = hashedPassword;
  		next();
  	});
  }
};