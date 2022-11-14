// require mongoose
const mongoose = require('mongoose')

// connect to mongoose DB
mongoose.connect('mongodb+srv://layla:layla@cluster0.qdzafht.mongodb.net/animals')
// mongodb+srv://layla:<password>@cluster0.qdzafht.mongodb.net/test
const db = mongoose.connection

db.on('connected', ()=>{
    console.log('Connected to mongo DB!')
})

// use node index in git bash to run the code

// create animals module
const animalSchema = new mongoose.Schema({
    name: String,
    size: String,
    species: String,
    age: Number
})

const Animal = mongoose.model('Animal', animalSchema)

// store data in DB
// controller methods

// create data
// Animal.insertMany([
//     {
//         name: 'Dro',
//         size: 'medium',
//         species: 'dog',
//         age: 12
//     },
//     {
//         name: 'Oreo',
//         size: 'small',
//         species: 'dog',
//         age: 4
//     },
//     {
//         name: 'Noro',
//         size: 'small',
//         species: 'cat',
//         age: 3
//     },
//     {
//         name: 'Hazel',
//         size: 'medium',
//         species: 'elephant',
//         age: 20
//     },
//     {
//         name: 'Veloche',
//         size: 'small',
//         species: 'Husky',
//         age: 10
//     },
// ]).then((err, docs)=>{
//     console.log('Data was succesfully added to DB')
// }).catch(err => console.log(err))

// get data
// async function getAnimal(req, res) {
//     // let forData = req.body
//     let animal = await Animal.findOne(
//         {name: 'Oreo'}
//     )
//     console.log('My animal ', animal)
//     // res.json({animal})
// }
// getAnimal()

// testing other methods
// Model.find()
// Model.findById()
// Model.findOneAndUpdate

// async function findAnimal(req, res) {
//     let animal = await Animal.find(
//        {name: 'Oreo'} 
//     )
//     console.log('find function result: ', animal)
// }
// findAnimal()

// async function findByIdAnimal(req, res) {
//     let animal = await Animal.findById(
//        {_id: '636791a65613ef3e1d6b67d9'} 
//     )
//     console.log('findById function result: ', animal)
// }
// findByIdAnimal()

async function findUpdateAnimal(req, res) {
    let animal = await Animal.findOneAndUpdate(
       {name: 'Oreo'},
       {age: 5},
       {new: true} // this is to get the updated result directly
    )
    console.log('findOneAndUpdate function result: ', animal)
}
findUpdateAnimal()