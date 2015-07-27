// config/passport.js

var _ = require('lodash');
var _super = require('sails-permissions/config/passport');

var passport = require('passport'),
  LocalStrategy = require('passport-local');

passport.serializeUser(function (user,done) {
  done(null,user.id)
});

passport.deserializeUser(function (user,done) {
  User.findOne({id:id}, function (err,user) {
    done(err,user);
  });
});

// Extend with custom logic here by adding additional fields, methods, etc.
passport.use(new LocalStrategy({
  usernameField:"identifier",
  passwordField:"password"
},function (username,password,done) {

  User.findOne({username:username}, function (err,user) {

    sails.log.debug("passport usering...");
    if(err){
      return done(err);
    }

    if(!user){
      return done(null,false,{message:"Incorrect username"});
    }

    if(!user.validatePassword(password)){
      return done(null,false,{message:"Incorrect password"});
    }

    return done(null,user);

  });
}));

_.merge(exports, _super);
_.merge(exports, {



});
