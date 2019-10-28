const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const path = require('path')
const app = express();
const { VerifyToken } = require('./src/helpers/AuthHelper')

app.use(logger('dev'));
const dbConfig = require('./src/config/db');
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

///cors middle ware

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Methods',
        'GET',
        'POST',
        'DELETE',
        'PUT',
        'OPTIONS'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-Type,Accept,Authorization'
    );
    next();
});
//


mongoose.Promise = global.Promise;

mongoose.connect(
    dbConfig.URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    err => {
        if (!err) {
            console.log('connected to DB IS Ok');
        } else {
            console.log('Error ', JSON.stringify(err));
        }
    }
);


require('./src/sockets/streams')(io);
const auth = require('./src/routes/authRouter');
const quiz = require('./src/routes/quizRouter')
app.use('/quiz-app', auth);
app.use('/quiz-app', VerifyToken, quiz)

app.use(express.static('./src/public'))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, './', 'src', 'public', 'index.html'))
});

app.set('port', 3000);

server.listen(app.get('port'), () => {
    console.log(`Server started on ${app.get('port')}`);
});
