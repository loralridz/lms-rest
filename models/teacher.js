var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    class: [{
        type: mongoose.Types.ObjectId,
        ref: 'Class'
    }]
});

module.exports = mongoose.model('Teacher', teacherSchema);