/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');
module.exports = {

  attributes: {
  	username:{
  		type:'string'
  	},
  	password:{
  		type:'string'
  	},
  	email:{
  		type:'string'
  	},
  	toJSON:function(){
      delete this.password;
      return this;
  	}
  },
/*
  beforeCreate:function(user,callback){
  	bcrypt.genSalt(10,function(err,salt){
      bcrypt.hash(user.password,salt,function(err,hash){
        if(err){
          log(err);
        }else{
          user.password = hash;
          callback(null,user);
        }
      })
    });
  }
*/
};

