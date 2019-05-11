var mongoose = require('mongoose');
var MultipleQuestionsSchema = new mongoose.Schema({
    Question: String,
    OptA: String,
    OptB: String,
    OptC: String,
    OptD: String,
    AnsOpt: String,
    level: String,
});
module.exports = mongoose.model('MultipleQuestions', MultipleQuestionsSchema);
