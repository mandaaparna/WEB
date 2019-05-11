var mongoose = require('mongoose');
var DescriptiveQuestionsSchema = new mongoose.Schema({
    Question: String,
    level: String,
    pts: String,
});
module.exports = mongoose.model('DescriptiveQuestions', DescriptiveQuestionsSchema);
