var mongoose = require('mongoose');

var schema = mongoose.Schema;

var quizSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    class:{
        type:mongoose.Types.ObjectId,
        ref:'Class'
    },
    submissions: [{
        sid: {
            type: mongoose.Types.ObjectId,
            ref: 'Student'
        },
        marks: {
            type: Number,
            default: 0,
        },
        
    }]
});

module.exports = mongoose.model('Quiz', quizSchema);