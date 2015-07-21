/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');
module.exports = {



  /**
   * `AuthController.login()`
   */
  login: function (req, res) {
    var username = req.param('username');
    var password = req.param('password');
    console.log("username is "+ username + "\n password is "+password);
    return res.view();
  },


  /**
   * `AuthController.process()`
   */
  process: function (req, res) {
    console.log("2-------------");
    passport.authenticate('local',function(err,user,info){
      if((err) || (!user)){
        return res.send({
          message:'login failed'
        });
        res.send(err);
      }
      req.logIn(user, function (err) {
        if(err){
          res.send(err);
        }
        return res.send({
          message:'login successful'
        });
      })
    });
  },


  /**
   * `AuthController.logout()`
   */
  logout: function (req, res) {
    req.logout();
    res.send('logout successful');
  }
};

module.exports.blueprints = {
  actions:true,
  rest:true,
  shortcuts:true
}
