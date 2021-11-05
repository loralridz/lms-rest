var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');
var Class = require('../models/class');
var Teacher = require('../models/teacher');
var Student = require('../models/student');

/* GET Operations */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');

});

//POST Operations
router.post('/addteacher', function(req, res, next) {
    Teacher.create(req.body)
        .then((teacher) => {
            console.log('Teacher has been Added ', teacher);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(teacher);
        }, (err) => next(err))
        .catch((err) => next(err));
});

module.exports = router;