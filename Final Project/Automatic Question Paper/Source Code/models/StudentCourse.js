var mongoose = require('mongoose');
var StudentCourseSchema = new mongoose.Schema({
    sid: String,
    fcid: String,
});
module.exports = mongoose.model('StudentCourse' +
    '', StudentCourseSchema);
