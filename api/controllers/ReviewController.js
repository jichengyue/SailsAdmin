/**
 * ReviewController
 *
 * @description :: Server-side logic for managing reviews
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add:function(req,res){

    var title = req.param("title");
    var category = req.param("category");
    var text     = req.param("text");

    Review.create({title:title,category:category,text:text}, function (err,data) {
      res.redirect("/pages/review_show.html");
    });
  },
  destroy: function (req,res) {
    var id = req.param("id");
    Review.destroy({id:id}, function (err,data) {
      res.redirect("/pages/review_show.html");
    });
  },
  edit: function (req,res) {
    var id = req.param("id");
    Review.findOne({id:id}, function (err, data) {
      var review = data;
      var isEdit = true;
      res.view('admin/review_edit',{review:review,isEdit:isEdit});

    });
  },
  update: function (req,res) {
    var id = req.param("id");
    var title = req.param("title");
    var category = req.param("category");
    var text     = req.param("text");

    Review.update({id:id},{title:title,category:category,text:text}, function (err,data) {
      res.redirect("/pages/review_show.html");
    });
  }
};

