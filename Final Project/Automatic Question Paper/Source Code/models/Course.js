var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
  CourseName: String,
});

module.exports = mongoose.model('Course', CourseSchema);

