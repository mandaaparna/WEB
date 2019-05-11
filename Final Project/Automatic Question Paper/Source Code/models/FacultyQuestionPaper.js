
var mongoose = require('mongoose');
var FacultyQuestionPaperSchema = new mongoose.Schema({
    fcid: String,
    qp:{ data: Buffer, contentType: String },
    dm:String,
});
module.exports = mongoose.model('FacultyQuestionPaper', FacultyQuestionPaperSchema);
