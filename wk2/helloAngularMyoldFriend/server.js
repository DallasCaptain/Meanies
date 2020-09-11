const express = require('express')
const app = express()


app.use(express.static(__dirname+'/helloAngular/dist/helloAngular'))

app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.get('/',(req,res)=>{
    //NOTHING ABSOULTELY NOTHING!!!!!
})

app.get('/api/',(req,res)=>{
    res.json({message:"Isn't angular grand"})
})

app.listen(9000,function(){
    console.log('Server started on port 9000')
})