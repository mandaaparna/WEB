var mongoose = require('mongoose');
var FacultyCourseSchema = new mongoose.Schema({
    fid: String,
    cid: String,
});
module.exports = mongoose.model('FacultyCourse', FacultyCourseSchema);
