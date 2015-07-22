/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {



  /**
   * `AuthController.login()`
   */
  login: function (req, res) {
     res.view();
  },

  auth: function(req, res,next){
    require('passport').authenticate('local', function (err,user,info) {
      if((err) || (!user)){
        next(err);
      }

      req.login(user, function (err) {
        if(err){
          return res.redirect('/login');
        }
        return res.redirect('/user/'+user.id);
      });
    })
  },



  /**
   * `AuthController.logout()`
   */
  logout: function (req, res) {
    req.logout();
    return res.redirect('/login');
  }
};

module.exports.blueprints = {
  actions:true,
  rest:true,
  shortcuts:true
}
