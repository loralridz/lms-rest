var mongoose = require('mongoose');

var schema = mongoose.Schema;

var resultsSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    class: {
        type: mongoose.Types.ObjectId,
        ref: 'Class'
    },
    sid: {
        type: mongoose.Types.ObjectId,
        ref: 'Student'
    },
    marks: {
        type: Number,
        default: 0,
    },
});
module.exports = mongoose.model('Result', resultsSchema);