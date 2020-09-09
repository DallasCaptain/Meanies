const express = require('express')
const app = express()
const session = require('express-session')
const ejs = require('ejs')
const flash = require('express-flash');
app.use(flash());
const mongoose = require('mongoose')

    mongoose.connect('mongodb://localhost/meaniesfirstDB', {useNewUrlParser: true})

    const MeanieSchema = new mongoose.Schema({
        name: {type:String,required:true, minlength: [3, 'NO TYS ALOUD']},
        progress: Number,
        email: {type:String,required:true},
        
    },{timestamps: true})

    const Meanie = mongoose.model('Meanie', MeanieSchema);

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
    
    app.get('/meanie/new',(req,res)=>{
        res.render('newMeanie')
    })
    
    app.post('/meanie',(req,res)=>{
        newmeanie = new Meanie()
        newmeanie.name = req.body.name
        newmeanie.email = req.body.email
        newmeanie.progress = 0
        newmeanie.save()
        .then(data =>{
            console.log(data);
            res.redirect('/meanie/new')
        })
        .catch(err => {
            console.log('err',err);
            res.redirect('/meanie/new')
        })
    })
    app.get('/',(req,res)=>{
        Meanie.find({})
        .then(meanies =>{
            //do something with meanies
            //console.log(meanies)
            res.render('index', {meanies:meanies})
        })
        .catch(err =>{
            console.log('err:',err)
            res.redirect('/')
        })
        
        
    })
    app.get('/home',(req,res)=>{
        //pretend db call
        let kittens = [{name:'fluffnstuff'},{name:'MR ripples'},{name:'garfield'},{name:'meanstare'}]
        res.render('index', {kittens:kittens})
    })
    app.get('/myform',(req,res)=>{
        console.log('in /myform')
        //console.log(req.session.flash.errors)
        if(req.session.flash){
            errors = req.session.flash.errors
            console.log('errors:', errors)
        }else{
            errors = []
        }
        res.render('myform',{errors:errors})
    })


    app.post('/meanies/',(req,res)=>{
        newmeanie = new Meanie()
        newmeanie.name = req.body.name
        newmeanie.email = req.body.email
        console.log('newmeanie:',newmeanie)
        newmeanie.save()
        .then(meanie =>{
            res.redirect('/')
        })
        .catch(err =>{
            console.log('err:',err)
            req.flash('errors',err.errors.email)
            
            res.redirect('/myform')
        })
    })
app.listen(8080, ()=>{console.log('listening on port 8080')})


