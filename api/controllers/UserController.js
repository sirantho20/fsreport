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

	}, 

	auth: function(req, res, next){

		if(!req.param('userName') || !req.param('passWord')){
			req.session.flash = {
				err: 'username and password are required for login'
			}

			res.redirect('/user/login');
			return;
		}

		User.findOneByUserName(req.param('userName')).exec(function(err, user){
			if(err) return next(err);

			if(!user){
				req.session.flash = {err: "account doesn't exist"}
				res.redirect('user/login');
				return;
			}

			require('bcrypt').compare(req.param('password'), user.passWord, function(err, valid){
				if(err) return next(err);

				if(!valid)
				{
					req.session.flash = { err: "username or password incorrect" }
					res.redirect('/user/login');
					return;
				}

				// user valid and can be authenticated
				req.session.authenticated = true;
				req.session.User = user;
			});
		});
	},

	login: function(req, res, next){
		res.view();
	}, 

	index: function(req, res, next){
		res.view();
	}
	
};

