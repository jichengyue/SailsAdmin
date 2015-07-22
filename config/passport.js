/**
 * Created by jcy on 15/7/21.
 */

var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
  bcrypt = require('bcrypt');

passport.use(new LocalStrategy(function (username,password,done) {
  process.nextTick(function () {
    User.findOne().where({
      or:[
        {username:username},
        {email:username}
      ]
    });
  }).done(function (err,user) {

    if (err) {
      return done(null, err);
    }

    if (!user) {
      return done(null, false, { message: 'Unknown user ' + username });
    }

    bcrypt.compare(password, user.password, function(err, res) {

      if (!res)
        return done(null, false, { message: 'Invalid Password'});

      return done(null, user, { message: 'Logged In Successfully'} );
    });

  });
}));

module.exports = {

  express:{
    customMiddleware: function (app) {
      console.log('Express middleware for passport ');
      app.use(passport.initialize());
      app.use(passport.session());
      app.use(function (req,res,next) {
        res.locals.loggedUser = req.user;
        next();
      });
    }
  }

}
