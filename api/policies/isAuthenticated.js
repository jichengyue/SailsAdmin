/**
 * Created by jcy on 15/7/21.
 */
module.exports = function (req,res,next) {
  var is_auth = req.isAuthenticated();
  if(is_auth){
    return next();
  }
  else{
    return res.redirect("/login",200);
  }
};
