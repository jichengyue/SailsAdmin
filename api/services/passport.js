/**
 * Created by jcy on 15/7/21.
 */
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  bcrypt = require('bcrypt');

//helper function
function findById(id,fn){
  User.findone(id).done(function(err,user){
    if(err){
      return fn(null,null);
    }else{
      return fn(null,user);
    }
  });
}

function findByUserName(u,fn){
  User.findone({

    username:u

  }).done(function(err,user){

    if(err){
      fn(null,null);
    }else{
      fn(null,user);
    }

  });
}

passport.serializeUser(function(user,done){
  done(null,user.id);
});

passport.deserializeUser(function(id,done){
  findById(id, function (err,user) {
    done(err,user);
  })
});

passport.use(new LocalStrategy(function (username,password,done) {
  process.nextTick(function () {
    findByUserName(username, function (err,user) {
      if(err){
        return done(null,err);
      }

      if(!user){
        return done(null,false,{
          message:'Unknown user'+username
        });
      }

      bcrypt.compare(password,user.password, function (err,res) {
        if(!res){
          return done(null,false,{
            message:'Invalid password'
          });
        }
        var returnUser = {
          username:user.username,
          createdAt:user.createdAt,
          id:user.id
        };

        return done(null,returnUser,{
          message:'Logged In Successfully'
        });
      })
    })
  });
}));
