var mongoose = require('mongoose');
var StudentAnswerSheetSchema = new mongoose.Schema({
    sid: String,
    qpid: String,
    ans:{ data: Buffer, contentType: String },
    marks:String,
});
module.exports = mongoose.model('StudentAnswerSheet', StudentAnswerSheetSchema);
