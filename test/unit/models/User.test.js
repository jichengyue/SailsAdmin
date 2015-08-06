/**
 * Created by jcy on 15/8/6.
 */
describe.only('UserModel', function () {
  describe('#find()', function () {
    it('should check find function',function(done){

      User.find().then(function (results) {

        sails.log.info(results);
        done();
      }).catch(done);

    });
  });
});
