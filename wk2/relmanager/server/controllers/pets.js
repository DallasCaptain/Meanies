//creates action to represent features of your website

const {Pet} = require('../models/pet')


module.exports = {

    //api functions

    petindex:(req,res)=>{
        Pet.find()
        .then(pets => {
            res.json(pets)
        })
        .catch(err=>res.json(err))
    },

    //normal functions
    index:(req,res)=>{
        res.render('index')
    },

    allpets:(req,res)=>{
        Pet.find({})
        .then(pets => {
            res.render('pets',{pets:pets})
        })
        .catch(err=>res.redirect('/'))
    },

    userlogin:(req,res)=>{
        //this is where you do the login
    }
}