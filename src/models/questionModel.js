const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    quizId: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz'
    },
    question: {
        type: String,
    },
    possibleAnswer1: {
        type: String
    },
    possibleAnswer2: {
        type: String
    },
    possibleAnswer3: {
        type: String
    },
    possibleAnswer4: {
        type: String
    },
    correctAnswer: {
        type: String
    },
    explanation: {
        type: String
    }
});

questionSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("Question", questionSchema);