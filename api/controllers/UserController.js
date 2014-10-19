/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	new: function(req, res, next){
		res.view();
	},
	create: function(req, res, next){
		User.create(req.params.all(), function addedUser (err, user){
			if(err) {

				return next(err);
			}

			res.redirect('/user');
		}); 
	}
	
};

