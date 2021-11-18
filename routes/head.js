var express = require('express');
const Class = require('../models/class');
var router = express.Router();

// get dashboard
router.get('/', function (req, res, next) {
  res.render('dashboard')
});
// get all classes
router.get('/class', function (req, res, next) {
  const classes = Class.find({}).populate('students.sid').exec();
  res.send(classes);
});
// get results of a class
router.get('/results/class/:id', function (req, res, next) {
  const { id } = req.params;
  const results = Result.find({ class: id }).populate('class').populate('sid').exec();
  res.send(results);
});
// get results of a student
router.get('/results/student/:id', function (req, res, next) {
  const { id } = req.params;
  const results = Result.find({ sid: id }).populate('class').populate('sid').exec();
  res.send(results);
});
// get all materials
router.get('/materials', function (req, res, next) {
  const { id } = req.params;
  const materials = Materials.find({ }).populate('class').exec();
  res.send(materials);
});

module.exports = router;
