const Category = require('../models/CategorySchema');
const slugify = require('slugify');

const CreateCategory = ((req, res) => {
    console.log(`the req ${req}`);
    const {name} = req.body
    Category.create( {name})
    .then((category) => {
        res.status(201).json(category);
    })
    .catch((error) => {
        res.status(400).json(error);
    })
})


module.exports = {
    CreateCategory,
}