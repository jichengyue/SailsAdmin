// api/controllers/AuthController.js

var _ = require('lodash');
var _super = require('sails-permissions/api/controllers/AuthController');
var passport = require('passport');



_.merge(exports, _super);
_.merge(exports, {


  // Extend with custom logic here by adding additional fields, methods, etc.
  login: function (req, res) {
    res.view();
  },
  auth: function (req,res) {

    passport.authenticate('local',
      { successRedirect:'/dash',
        failureRedirect:'/login',
        failureFlash:true

    })
  }

});
