// api/controllers/UserController.js

var _ = require('lodash');
var _super = require('sails-permissions/api/controllers/UserController');

_.merge(exports, _super);
_.merge(exports, {

  // Extend with custom logic here by adding additional fields, methods, etc.
  regist: function (req,res) {
    var username = req.param('username');
    var email = req.param('email');
    var password = req.param('password');

    User.create({username:username,email:email}, function (err, data) {


    });

  }

});
