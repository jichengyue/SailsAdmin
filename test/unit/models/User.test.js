/**
 * Created by jcy on 15/8/6.
 */

//var assert = require("assert"); //非必需
//var should = require("should"); //非必需 如果需要should断言 需要安装 should库 npm install should --save-dev

//describe.only() 在总体的测试时只运行这一个测试用例   npm test运行所有的测试用例
describe('UserModel', function () {
  describe('#find()', function () {
    it('should check find function',function(done){

      User.find().then(function (results) {

        sails.log.info(results);
        //assert.equal(-1, [1,2,3].indexOf(0));  //非必需
        //[1,2,3].indexOf(8).should.equal(-1);   //非必需
        done();
      }).catch(done);

    });
  });
});
