//servers listen for requests and then respond
//needs to be setup
//needs routes to listen
//needs to listen

const express = require('express')
const app = express()
const session = require('express-session')
const ejs = require('ejs')
const bcrypt = require('bcrypt')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/meaniesfirstDB', {useNewUrlParser: true})

// const UserSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String,
//     pets:[PetSchema],
// })

// const User = new mongoose.model('User',UserSchema)





app.use(session({
    secret: 'i solemnly swear i am upto no good',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname+'/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.urlencoded({extended: true}));

require('./server/config/routes')(app)

app.listen(9000,function(){
    console.log('Server started on port 9000')
})

