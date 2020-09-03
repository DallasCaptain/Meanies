const express = require('express')
const app = express()
const ejs = require('ejs')

    app.use(express.static(__dirname+'/static'))
    app.set('view engine', 'ejs')
    app.set('views', __dirname + '/views')
    app.get('/',(req,res)=>{
        res.send('Hello Class')
    })
    app.get('/home',(req,res)=>{
        //pretend db call
        let kittens = [{name:'fluffnstuff'},{name:'MR ripples'},{name:'garfield'},{name:'meanstare'}]

        
        res.render('index', {kittens:kittens})
    })
app.listen(8080, ()=>{console.log('listening on port 8080')})