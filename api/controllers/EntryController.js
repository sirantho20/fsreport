/**
 * EntryController
 *
 * @description :: Server-side logic for managing entries
 * @help        :: See http://links.sailsjs.org/docs/controllers
 *//**/

module.exports = {
	
	add: function(req, res){

		res.view();
	},
	create: function(req, res, next){

		User.create(req.params.all(), function (err, user){
			if (err) {
				req.session.flash = { err: err }

				return next(err);
			}

			res.redirect("/");
		});
	},
	index: function(req, res, next){
		User.find(function foundUsers(err, users){

			if (err) return next(err);

			res.view({users: users});
		});
	}
};

