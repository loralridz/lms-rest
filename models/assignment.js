var mongoose = require('mongoose');

var schema = mongoose.Schema;

var assignmentSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
    assignTime: {
        type: Date,
        default: Date.now(),
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

module.exports = mongoose.model('Assignment', assignmentSchema);