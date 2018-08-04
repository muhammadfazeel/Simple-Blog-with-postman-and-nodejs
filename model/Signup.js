var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var usersSchema = new Schema
  (
      {
    name:  String,
    email: {type: String, unique: true, required: [true, "cannot be empty."]},
    password:{type: String, required: [true, "cannot be empty."]},
     }
  );
  module.exports=mongoose.model('Auther',usersSchema);