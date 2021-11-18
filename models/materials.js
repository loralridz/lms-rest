var mongoose = require('mongoose');

var schema = mongoose.Schema;

var materialsSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    class:{
        type: mongoose.Types.ObjectId,
        ref: 'Class'
    },
});
module.exports = mongoose.model('Material', materialsSchema);