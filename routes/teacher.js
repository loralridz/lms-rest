var express = require('express');
const Assignment = require('../models/assignment');
const Material = require('../models/materials');
const Quiz = require('../models/quiz');
const Result = require('../models/results');
var router = express.Router();

// view dashboard
router.get('/', function (req, res, next) {
  res.render('dashboard')
});
// view all quizzes
router.get('/viewattquiz', function (req, res, next) {
  const quizzes = Quiz.find({}).populate('class').populate('submissions.sid').exec();
  res.send(quizzes);
});
// add new quiz
router.post('/add-quiz', function (req, res, next) {
    const quizObj = req.body;
  const quiz = Quiz.create(quizObj).exec();
  res.send(quiz);
});
// get a quiz
router.get('/quiz/:id', function (req, res, next) {
    const { id } = req.params;
  const quiz = Quiz.findById(id).exec();
  res.send(quiz);
});
// delete a quiz
router.delete('/quiz:id', function (req, res, next) {
    const { id } = req.params;
  Quiz.findByIdAndDelete(quizId).exec();
  res.send(`Quiz with id ${id} deleted !!`);
});
// view all assignments
router.get('/viewattassign', function (req, res, next) {
  const assignment = Assignment.find({}).exec();
  res.send(quiz);
});
//  add a new assignment
router.post('/addassign', function (req, res, next) {
    const assignObj = req.body;
  const assignment = Assignment.create(assignObj).exec();
  res.send(assignment);
});
// get a assignment
router.get('/assign/:id', function (req, res, next) {
    const { id } = req.body;
  const quiz = Quiz.findById(id).exec();
  res.send(quiz);
});
// delete assignment
router.delete('/assignment/:id', function (req, res, next) {
    const { id } = req.params;
  Assignment.findByIdAndDelete(id).exec();
  res.send(`Assignment deleted with id ${id} !!`);
});
// add material
router.post('/addmat', function (req, res, next) {
    const materialObj = req.body;
  const material = Material.create(materialObj).exec();
  res.send(material);
});
// get materials
router.get('/materials', function (req, res, next) {
  const materials = Material.find({}).exec();
  res.send(materials);
});
// delete a material
router.delete('/material/;id', function (req, res, next) {
    const { id } = req.params;
    Material.findByIdAndDelete(id).exec();
    res.send(`Material deleted with id ${id} !!`);
});
// add marks
router.post('/addmarks', function (req, res, next) {
    const marksObj = req.body;
  const result = Result.create(marksObj).exec();
  res.send(result);
});
// get marks
router.put('/marks/:id', function (req, res, next) {
    const { id } = req.body;
  const marks = Result.findById(id).exec();
  res.send(marks);
});
// delete marks
router.delete('/marks/:id', function (req, res, next) {
  const { id } = req.body;
  const marks = Result.findByIdAndDelete(id).exec();
  res.send(marks);
});

module.exports = router;
