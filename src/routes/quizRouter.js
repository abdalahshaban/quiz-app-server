const express = require('express');
const router = express.Router();
const {
    addQuiz, allQuiz, deleteQuize, getQuizById, updateQuestion, deleteQuestion, publishQuiz, getPublished,
    addQuestions
} = require('../controllers/quizCtrl');

router.post('/add-quiz', addQuiz);
router.get('/all-quiz', allQuiz);
router.post('/delete-quiz', deleteQuize)
router.post('/get-quiz', getQuizById)
router.put('/publish-quiz', publishQuiz)
router.get('/get-publish', getPublished)
router.put('/update-question', updateQuestion)
router.post('/add-question/:id', addQuestions)
router.delete('/delete-question/:id', deleteQuestion)


module.exports = router;
