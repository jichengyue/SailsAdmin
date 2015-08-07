/**
 * Created by jcy on 15/8/7.
 */
var request = require('supertest');

describe('AuthController',function(){

  describe('#login()', function () {
    it('should redirect to /dashboard', function (done) {
      request(sails.hooks.http.app)
        .post('/login')
        .send({identifier:'admin',password:'admin1234'})
        .expect(302)
        .expect('location','/dashboard',done);

    });
  });

});
