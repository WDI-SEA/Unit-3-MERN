// import mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;

require('dotenv').config()

//Connect to our mongo DB
mongoose.connect(process.env.DATABASE_URL)


// Display message when connected
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo database!!')
})



// Create an Animal schema
const animalSchema = new  mongoose.Schema({
    name: String,
    species: String,
    size: String,
    age: Number
})



// Creating a model
// Models have attributes and methods
const Animal = mongoose.model('Animal', animalSchema)



// Store some data into our Database
// Controllers methods


// Using .then()
// Animal.insertMany([
//     {
//         name: 'Hazel',
//         size: 'medium',
//         species: 'cat',
//         age: 3
//     },
//     {        
//         name: 'Rocky',
//         size: 'small',
//         species: 'cat',
//         age: 10
//     },
//     {
//         name: 'Speedy',
//         size: 'large',
//         species: 'turtle',
//         age: 999
//     },
//     {
//         name: 'Kobe',
//         size: 'large',
//         species: 'cheetah',
//         age: 12
//     },
//     {
//         name: 'Shaq',
//         size: 'small',
//         species: 'tiger',
//         age: 5
//     }

// ]).then((err, docs) => {
//     console.log('Data was succesfully added to DB')
// }).catch(err => console.log(err))


// Using async & await
// async function getAnimal(req, res) {
//     // let formData = req.body



//     let animal= await Animal.findOne({name: 'Rocky'})

//     console.log('My animal!', animal)

// res.json({animal})
// }

// getAnimal()



// get all animals
async function getAllAnimals(req, res) {

    let animals= await Animal.find()

    console.log('My animals List!', animals)
}

// getAllAnimals()


// Get animal by id
async function getAnimalById(req, res) {

    let animal= await Animal.findById('636791806510fe5e479bc237')

    console.log('My animal!', animal)
}

// getAnimalById()


// Update animal
async function updateAnimal(req, res) {

    let updatedAnimal= await Animal.findOneAndUpdate(
        {name:'Rocky'},
        {species: 'dog', size: 'medium'}
    )

    console.log('My animal!', updatedAnimal)

}

// updateAnimal()



//find if animal exists
async function animalExists(req, res) {


    let animal = await Animal.exists({name: 'Hazel'})

    console.log('The animal', animal)
}

// animalExists()