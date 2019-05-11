var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  name: String,
  birthday: String,
  gender: String,
  email: String,
  username: String,
  user_password: String,
});

module.exports = mongoose.model('Student', StudentSchema);

