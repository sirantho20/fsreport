/**
 * ReportController
 *
 * @description :: Server-side logic for managing Reports
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	create: function(req, res, next){
		Report.create(req.params.all(), function addedUser(err, user){
			if (err) return next(err);

			res.json(user);
		});
	}
};

