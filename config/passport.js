/**
 * Created by jcy on 15/7/21.
 */

var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

module.exports = {
  express:{
    customMiddleware: function (app) {
      console.log('Express middleware for passport ');
      app.use(passport.initialize());
      app.use(passport.session());
    }
  }
}
