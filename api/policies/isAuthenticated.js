/**
 * Created by jcy on 15/7/21.
 */
<<<<<<< HEAD:api/policies/authenticated.js
module.exports = function authenticated(req,res,next) {
=======
module.exports = function (req,res,next) {
>>>>>>> a482d2c6c6698434d39d9ad6d9a76c91cd786652:api/policies/isAuthenticated.js
  var is_auth = req.isAuthenticated();
  if(is_auth){
    return next();
  }
  else{
    return res.redirect('/login');
  }
};
