const questionsModel = require('../models/questionzes/questionzes-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (questionId) => questionsModel.findById(questionId)
const findQuestionsForQuiz = (qzid) => questionsModel.findById(qzid)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz}