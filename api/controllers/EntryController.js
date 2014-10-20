/**
 * EntryController
 *
 * @description :: Server-side logic for managing entries
 * @help        :: See http://links.sailsjs.org/docs/controllers
 *//**/

module.exports = {
	
	new: function(req, res){

		res.view();
	},
	create: function(req, res, next){

		Entry.create(req.params.all(), function (err, user){
			if (err) {
				req.session.flash = { err: err }

				return next(err);
			}

			//ntry.watch(req);

			res.redirect('/entry/new');
		});
	},
	index: function(req, res, next){
		res.view();
	},

	subscribe: function(req, res){
		User.find(function gotUsers(err, users){
			User.subscribe(req.socket, users);
		});

		res.send(200,{user: users});
	} 
};


