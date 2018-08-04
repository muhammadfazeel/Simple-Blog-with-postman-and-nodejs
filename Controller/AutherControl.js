var express = require('express');
var mongoose = require('mongoose');
var user_model=require('../model/Signup');
mongoose.connect('mongodb://localhost/Blog');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
//For SignUp
exports.SignUp=function(req,res)
{
var newuser = new user_model
({
    name:       req.body.Name,
    email:      req.body.Email,
    password:   req.body.Password
    
});

    newuser.save(function(err)
    {
        if (err) {
            return next(err);
        }
        res.send(newuser);
    }
);
};
//For Login
exports.login=function(req,res,next)
{
    
    var email = req.param.Email;

  user_model.findOne(email, function(err,user) {

    if (err)
{
      res.send(err);
}
    res.send(user);
   // console.log(email);
  });
};
