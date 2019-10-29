const quizCtrl = {};
const Joi = require('joi');
const HttpStatues = require('http-status-codes');

const UserModel = require('../models/userModel')
const QuizModel = require('../models/quizModel')
const questionModel = require('../models/questionModel')

quizCtrl.addQuiz = async (req, res) => {
    const schema = Joi.array().items(Joi.object().keys({
        question: Joi.string().required(),
        possibleAnswer1: Joi.string().required(),
        possibleAnswer2: Joi.string().required(),
        possibleAnswer3: Joi.string().required(),
        possibleAnswer4: Joi.string().required(),
        correctAnswer: Joi.string().required(),
        explanation: Joi.string().required()
    }))

    const { error, value } = Joi.validate(req.body, schema);
    if (error && error.details) {
        return res.status(HttpStatues.BAD_REQUEST).json({ msg: error.details });
    }

    const creatQuiz = async () => {
        //create Quiz
        let createdQuiz = await QuizModel.create({
            teacherId: req.user._id
        })

        //add quiz to teacher
        await UserModel.updateOne({ _id: req.user._id }, {
            $push: {
                quizs: {
                    quizId: createdQuiz._id
                }
            }
        })

        //update quiz with questions
        for (let i = 0; i < value.length; i++) {
            let questionBody = {
                question: value[i]['question'],
                possibleAnswer1: value[i]['possibleAnswer1'],
                possibleAnswer2: value[i]['possibleAnswer2'],
                possibleAnswer3: value[i]['possibleAnswer3'],
                possibleAnswer4: value[i]['possibleAnswer4'],
                correctAnswer: value[i]['correctAnswer'],
                explanation: value[i]['explanation'],
                quizId: createdQuiz._id
            }
            await questionModel.create(questionBody).then(async question => {
                //update quize with questions
                await QuizModel.updateOne({ _id: createdQuiz._id }, {
                    $push: {
                        questions: {
                            questionId: question._id
                        }
                    }
                })
            })
        }
    }

    creatQuiz()
        .then(() => {
            return res.status(HttpStatues.OK).json({ message: 'quiz created' });
        })
        .catch(err => {
            return res.status(HttpStatues.INTERNAL_SERVER_ERROR).json({ message: 'Error Occured' });
        })



}

quizCtrl.allQuiz = async (req, res) => {
    await QuizModel.find({ teacherId: req.user._id, publish: false })
        .then(data => {
            return res.status(HttpStatues.OK).json(data);
        })
        .catch(err => {
            return res.status(HttpStatues.BAD_REQUEST).json({ message: err });
        })
}

quizCtrl.deleteQuize = async (req, res) => {
    const { id } = req.body

    const deleteQuiz = async () => {
        const result = await QuizModel.findByIdAndRemove(id)
        // console.log(result, 'result')
        if (!result) {
            return res.status(HttpStatues.NOT_FOUND).json({ message: 'Could not delete this item' });
        } else {
            await UserModel.updateOne({ _id: req.user._id },
                {
                    $pull: {
                        quizs: {
                            quizId: result._id
                        }
                    }
                }
            )
            await questionModel.deleteMany({ quizId: result._id })
        }

    }


    deleteQuiz()
        .then(() => {
            return res.status(HttpStatues.OK).json({ message: 'quiz Deleted' });
        })
        .catch(err => {
            return res.status(400).json({ message: err });
        })


}

quizCtrl.getQuizById = async (req, res) => {
    const { id } = req.body
    const { page = 1, perPage = 1 } = req.query
    const options = {
        page: parseInt(page, 10),
        limit: parseInt(perPage, 10)
    }
    // console.log(req.body);
    let result = await questionModel.paginate({ quizId: id }, options)
    // console.log(result, 'result')
    if (!result) {
        return res.status(HttpStatues.INTERNAL_SERVER_ERROR).json({ message: 'Quiz Not Found' });
    } else {
        return res.status(HttpStatues.OK).json(result);
    }
}

quizCtrl.updateQuestion = async (req, res) => {
    const { _id, question, possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4, correctAnswer, explanation } = req.body
    let doc = {
        question,
        possibleAnswer1,
        possibleAnswer2,
        possibleAnswer3,
        possibleAnswer4,
        correctAnswer,
        explanation,
    }
    //update in question model
    await questionModel.updateOne({ _id }, doc)
        .then(() => {
            return res.status(HttpStatues.OK).json({ message: 'Question Updated' });
        })
        .catch(err => {
            return res.status(HttpStatues.BAD_REQUEST).json({ message: err });
        })

}

quizCtrl.deleteQuestion = async (req, res) => {
    const { id } = req.params

    //delete question from question model
    //pull this question from quiz model
    const deletQue = async () => {
        const result = await questionModel.findByIdAndRemove(id)
        if (!result) {
            return res.status(HttpStatues.NOT_FOUND).json({ message: 'Could not delete this item' });
        } else {
            await QuizModel.updateOne({ teacherId: req.user._id },
                {
                    $pull: {
                        questions: {
                            questionId: result._id
                        }
                    }
                })
        }

    }

    deletQue()
        .then(() => {
            return res.status(HttpStatues.OK).json({ message: 'Question Deleted' });
        })
        .catch(err => {
            return res.status(HttpStatues.BAD_REQUEST).json({ message: err });
        })
}

quizCtrl.publishQuiz = async (req, res) => {
    const { id } = req.body

    await QuizModel.updateOne({ _id: id }, {
        $set: {
            publish: true
        }
    }).then(() => {
        return res.status(HttpStatues.OK).json({ message: 'Published' });
    })
        .catch(err => {
            return res.status(HttpStatues.BAD_REQUEST).json({ message: err });
        })

}

quizCtrl.getPublished = async (req, res) => {
    await QuizModel.find({ teacherId: req.user._id, publish: true })
        .then((data) => {
            return res.status(HttpStatues.OK).json(data);
        }).catch(err => {
            return res.status(HttpStatues.BAD_REQUEST).json({ message: err });
        })
}

quizCtrl.addQuestions = async (req, res) => {
    const { id } = req.params
    const schema = Joi.array().items(Joi.object().keys({
        question: Joi.string().required(),
        possibleAnswer1: Joi.string().required(),
        possibleAnswer2: Joi.string().required(),
        possibleAnswer3: Joi.string().required(),
        possibleAnswer4: Joi.string().required(),
        correctAnswer: Joi.string().required(),
        explanation: Joi.string().required()
    }))

    const { error, value } = Joi.validate(req.body, schema);
    if (error && error.details) {
        return res.status(HttpStatues.BAD_REQUEST).json({ msg: error.details });
    }

    // console.log(value, 'value');
    console.log(id);
    const addQuestion = async () => {
        //update quiz with questions
        for (let i = 0; i < value.length; i++) {
            let questionBody = {
                question: value[i]['question'],
                possibleAnswer1: value[i]['possibleAnswer1'],
                possibleAnswer2: value[i]['possibleAnswer2'],
                possibleAnswer3: value[i]['possibleAnswer3'],
                possibleAnswer4: value[i]['possibleAnswer4'],
                correctAnswer: value[i]['correctAnswer'],
                explanation: value[i]['explanation'],
                quizId: id
            }
            await questionModel.create(questionBody).then(async question => {
                //update quize with questions
                await QuizModel.updateOne({ _id: id }, {
                    $push: {
                        questions: {
                            questionId: question._id
                        }
                    }
                })
            })
        }
    }


    addQuestion()
        .then(() => {
            return res.status(HttpStatues.OK).json({ message: 'added to quiz' });
        })
        .catch(err => {
            return res.status(HttpStatues.INTERNAL_SERVER_ERROR).json({ message: 'Error Occured' });
        })

}


module.exports = quizCtrl;