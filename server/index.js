
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const ctrl = require('./controller');
const postCtrl = require('./postController')
const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;
const app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))



massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('Hello World')
}).catch( err => console.log(err));



///AUTH ENDPOINTS
app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);
// app/post('/auth/logout', ctrl.logout);

app.get('/post/:postid', postCtrl.getAllPosts)

app.listen(SERVER_PORT, () => console.log(`Listening to port ${SERVER_PORT}`))