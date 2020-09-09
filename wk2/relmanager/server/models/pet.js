//creating an object representation of db data

const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
    name:String,
    breed:String,
    coat:String,

})

const Pet = new mongoose.model('Pet',PetSchema)



module.exports={
    Pet:Pet,
    PetSchema:PetSchema
}