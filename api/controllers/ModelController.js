// api/controllers/ModelController.js

var _ = require('lodash');
var _super = require('sails-permissions/api/controllers/ModelController');

_.merge(exports, _super);
_.merge(exports, {

  // Extend with custom logic here by adding additional fields, methods, etc.
  show_left_bar_data: function (req,res) {
     Model.find(function (err,data) {
       sails.log.info(data);
     });
  }

});
