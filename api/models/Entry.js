/**
* Entry.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	ddate: {
  		type: "date",
  		defaultsTo: function(){ new Date(); }
  	},

  	hours: {
  		type: "integer"
  	},
  	bs: {
  		type: "integer"
  	},
  	rv: {
  		type: "integer"
  	},
  	mags: {
  		type: "integer"
  	},
  	tracts: {
  		type: "integer"
  	}

  }
};
