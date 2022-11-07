//Imported mongoose library
const mongoose = require('mongoose')

//Connect to our mongo DB
mongoose.connect('mongodb+srv://Kareem:kareem@cluster0.xrijx.mongodb.net/animals')

// Display message when connected
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo database!!!')
})

const schema = mongoose.Schema
// Create an Animal Model 
const animalSchema = new schema({
    name: String,
    size: String,
    species: String,
    age: Number
})
const Animal = mongoose.model('Animal', animalSchema)
// Store some data into our Database 
// Controller methods

async function getAnimal(req,res) {
    // let formData = req.body

    let animal = await Animal.findOne(
        {name: 'rocky'}
    )
    console.log('My animal! ', animal)
    // res.json({animal})
}

getAnimal()









async function updateAnimal(req,res) {
    // let formData = req.body

    let animal = await Animal.findOneAndUpdate(
        {name: 'rocky'},
        {name: 'newRocky!'}
    )
    console.log('My animal! ', animal)
    // res.json({animal})
}

updateAnimal()









// Animal.insertMany([
//     {
//         name: 'rocky',
//         size: 'medium',
//         species: 'elephant',
//         age: 42
//     },
//     {
//         name: 'oreo',
//         size: 'small',
//         species: 'cat',
//         age: 12
//     },
//     {
//         name: 'nutella',
//         species: 'dog',
//         size: 'small',
//         age: 8
//     },
//     {
//         name: 'hazel',
//         species: 'cheetah',
//         size: 'medium',
//         age: 100
//     },
//     {
//         name: 'speedy',
//         species: 'turtle',
//         size: 'large',
//         age: 999
//     }
// ]).then((err, docs) => {
//     console.log('Data was succesfully added to DB')
// }).catch(err => console.log(err))

