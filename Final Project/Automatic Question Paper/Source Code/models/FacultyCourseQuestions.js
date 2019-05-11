var mongoose = require('mongoose');
var FacultyCourseQuestionsSchema = new mongoose.Schema({
    fcid: String,
    qid: String,
    dmq: String,
    level:String,
});
module.exports = mongoose.model('FacultyCourseQuestions', FacultyCourseQuestionsSchema);
