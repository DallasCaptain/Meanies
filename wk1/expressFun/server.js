const express = require('express')
const app = express()
const session = require('express-session')
const ejs = require('ejs')

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

    app.get('/',(req,res)=>{
        res.send('Hello Class')
    })
    app.get('/home',(req,res)=>{
        //pretend db call
        let kittens = [{name:'fluffnstuff'},{name:'MR ripples'},{name:'garfield'},{name:'meanstare'}]

        
        res.render('index', {kittens:kittens})
    })

    app.get('/myform',(req,res)=>{
        res.render('myform')
    })
    app.get('/mypost/:name/',(req,res)=>{
        if(!req.session.counter)
        req.session.counter = 0


        req.session.counter++
        console.log('before',req.session)
        req.session.query = req.query
        console.log('after',req.session)
        // console.log(req.query)
        // console.log(req.params)
        res.render('myform')
    })
app.listen(8080, ()=>{console.log('listening on port 8080')})