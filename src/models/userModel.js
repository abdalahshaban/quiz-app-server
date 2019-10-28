const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String
        },
        password: {
            type: String
        },
        quizs: [
            {
                quizId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Quiz',
                    autopopulate: true
                },
                createdAt: {
                    type: Date,
                    default: Date.now()
                }
            }
        ]
    },
    {
        timestamps: true
    }
);
userSchema.plugin(require('mongoose-autopopulate'))
userSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('User', userSchema);
