/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  layout: 'template',

  auth: function(req, res, next){

    if(!req.param('userName') || !req.param('passWord')){
      req.session.flash = {
        err: 'username and password are required for login'
      }

      res.redirect('/session/login');
      return;
    }

    User.findOneByUserName(req.param('userName')).exec(function(err, user){
      if(err) return next(err);

      if(!user){
        req.session.flash = {err: "account doesn't exist"}
        res.redirect('session/login');
        return;
      }

      require('bcrypt').compare(req.param('passWord'), user.passWord, function(err, valid){
        if(err) return next(err);

        if(!valid)
        {
          req.session.flash = { err: "username or password incorrect" }
          res.redirect('/session/login');
          return;
        }

        // user valid and can be authenticated
        req.session.authenticated = true;
        req.session.User = user;
        res.redirect('/user');
      });
    });
  },

  login: function(req, res, next){
    res.locals.layout = 'template';
    res.view();
  },


  /**
   * `SessionController.logout()`
   */
  logout: function (req, res, next) {
    
    if(req.session.authenticated){
      req.session.authenticated = false;
      req.session.User = {}
      res.redirect('session/login');
    }

    res.redirect('/');
  }
};

