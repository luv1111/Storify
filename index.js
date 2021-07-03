require('dotenv').config()

const express = require("express");

const ejs = require("ejs");
const expressLayout = require('express-ejs-layouts');

const path = require("path")


const app = express();
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const MongoDbStore = require('connect-mongo')

//Database Connection
mongoose.connect('mongodb://localhost/Store1', { useNewUrlParser: true }, { useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database Connected...');
}).catch(error => {
    console.log('Connection Failed')
})



const PORT = process.env.PORT || 5000;



// Session setting
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: MongoDbStore.create({
        mongoUrl: 'mongodb://localhost/Store1'
    }),
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))

app.use(flash())

app.use(express.static('public'))



app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

require('./routes/web')(app)








app.listen(5000, () => {
    console.log("Listening on port 5000")
})