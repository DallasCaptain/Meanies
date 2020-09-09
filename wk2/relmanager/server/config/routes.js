//translates a url request into appropriate action

const pets = require('../controllers/pets')


module.exports = function(app){

    app.get('/',(req,res)=>{
        pets.index(req,res)
    })

    app.get('/pets',(req,res)=>{
        pets.allpets(req,res)
    })
    
    app.get('/createpet',(req,res)=>{
        pet = new Pet()
        pet.name = 'mittens'
        pet.breed = 'Siberian'
        pet.coat = 'charcoal'
        pet.save()
        .then(_=>res.redirect('/pets'))
        .catch(err=>res.redirect('/'))
    })
    
    app.get('/users',(req,res)=>{
        User.find({})
        .then(users => {
            res.render('users',{users:users})
        })
        .catch(err=>res.redirect('/'))
    })
    
    app.get('/createuser',(req,res)=>{
        user = new User()
        user.name = 'carl'
        user.email = 'carl@bob.com'
        bcrypt.hash('asdfasdf',10)
        .then(pw=>{
            user.password = pw
            user.pets = []//how do i get a new pet into here
            user.save()
            .then(newuser =>{
                //create and add a pet then resave the user
                pet = new Pet()
                pet.name = 'snuffles'
                pet.breed = 'Mouse'
                pet.coat = 'Albino'
                pet.save()
                .then(newpet =>{
                    newuser.pets.push(newpet)
                    newuser.save()
                    .then(_ => res.redirect('/users'))
                    .catch(err=>res.redirect('/'))
    
                })
                .catch(err=>res.redirect('/'))
            })
            .catch(err=>res.redirect('/'))
        })
        .catch(err=>res.redirect('/'))
    })
    
    app.get('/updatefido',(req,res)=>{
    
        //start by finding the user
        User.findOne({_id:'5f57eaad0d07534af85359af'})
        .then(bob=>{
            for(let pet of bob.pets){
                if(pet._id == '5f57eaad0d07534af85359b0'){
                    pet.name= "FideTober"
    
                    Pet.findOne({_id:'5f57eaad0d07534af85359b0'})
                    .then(updatepet=>{
                        updatepet.name= "FideTober"
                        updatepet.save()
                        .then(_=>{
                            console.log('we updated Fido')
    
                        })
                        .catch(err=>res.redirect('/'))
                    })
                    .catch(err=>res.redirect('/'))
                }
            }
            bob.save()
            .then(_=>res.redirect('/users'))
            .catch(err=>res.redirect('/'))
        })
        .catch(err=>res.redirect('/'))
    })
    
    app.get('/authenicatecarl',(req,res)=>{
        User.findOne({email:'carl@bob.com'})
        .then(user=>{
            bcrypt.compare('asdfasdf',user.password)
            .then(data =>{
                if(data){
                    //add user to session
                    res.redirect('/users')
                }else{
                    res.redirect('/')
                }
            })
            .catch(err=>res.redirect('/'))
        })
        .catch(err=>res.redirect('/'))
    })
}