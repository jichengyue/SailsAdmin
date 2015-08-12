/**
 * Created by jcy on 15/8/9.
 */
describe("PermissionService", function () {

  describe("#hasForeignObjects()", function () {

    it(" user admin has foreigh objects", function (done) {

      sails.log.debug("-----3");
      User.findOne({username:"admin"}, function (err, user) {

        if(err) {

          sails.log.debug("-----1");
          return;
        }
        sails.log.debug("----"+user);
        Review.findOne({id:1}, function (err, review) {
          if(err){

            return;
          }

          sails.log.debug(review);

         /* var isForeign = PermissionService.hasForeignObjects(review,user);

          if(isForeign){
            sails.log.debug('this review is owener for user');
          }*/
          done();
        });

      });

    });
  });

});
