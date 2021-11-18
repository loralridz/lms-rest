var express = require('express');
const Assignment = require('../models/assignment');
const Quiz = require('../models/quiz');
const Material = require('../models/materials');
const Result = require('../models/results');
var router = express.Router();

// view dashboard
router.get('/', function (req, res, next) {
  res.render('dashboard');
});
// view a quiz
router.post('/view-quiz', function (req, res, next) {
  const { quizId } = req.body;
  const quiz = Quiz.findById(quizId).exec();
  res.send(quiz);
});
// attempt quiz
router.get('/attempt-quiz', function (req, res, next) {
  const { quizId } = req.body;
  const quiz = Quiz.findById(quizId).exec();
  res.send(quiz);
});
// view assignment
router.get('/view-assignment', function (req, res, next) {
  const { id } = req.body;
  const assignment = Assignment.findById(id).exec();
  res.send(assignment);
});
//  submit assignment
router.post('/submit-assignment', function (req, res, next) {
  const assignObj = req.body;
  const assignment = Assignment.create(assignObj).exec()
  res.send(assignment);
});
// get material
router.get('/material', function (req, res, next) {
  const materials = Material.find({}).exec();
  res.send(materials);
});
// get one material
router.get('/material/:id', function (req, res, next) {
  const id = req.params.id;
  const materials = Material.findById(id).exec();
  res.send(materials);
});
// find materials of a class
router.get('/material/:subid', function (req, res, next) {
  const subId = req.params.id;
  const materials = Material.find({ class: subId }).exec();
  res.send(materials);
});
// get results of a class
router.get('/result/:subid', function (req, res, next) {
  const subId = req.params.id;
  const results = Result.find({ class: subId }).exec();
  res.send(results);
});
// get results of a student
router.get('/result', function (req, res, next) {
  const { id } = req.body;
  const results = Result.find({ sid: id }).exec();
  res.send(results);
});

module.exports = router;
