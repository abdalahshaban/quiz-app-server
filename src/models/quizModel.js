const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    teacherId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    questions: [
        {
            questionId: {
                type: Schema.Types.ObjectId,
                ref: 'Question',
                autopopulate: true
            },
            createdAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    publish: {
        type: Boolean,
        default: false
    }
});

quizSchema.plugin(require('mongoose-autopopulate'))
quizSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("Quiz", quizSchema);