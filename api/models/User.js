/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema: true,

  attributes: {

    username : { type: 'string', required: true, primaryKey: true, unique: true },

    firstName : { type: 'string' },

    lastName : { type: 'string' },

    email : { type: 'string', required: true },

    passWord : { type: 'string', required: true  },
    
    reports : { collection: 'Report' }
  }
};

