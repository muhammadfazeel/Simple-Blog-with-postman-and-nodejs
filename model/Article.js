var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var usersSchema = new Schema
  (
      {
            title:  String,
            auther: String,
            date:   String,
            content:String
     }
  );
  module.exports=mongoose.model('AutherControl',usersSchema);
  var Athr = mongoose.model('AutherControl', Schema);