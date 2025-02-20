const express = require('express');
const CategoryController = require('../Controller/CategoryController');
const router = express.Router();

router.route('/') 
    .post(CategoryController.CreateCategory)
    .get(CategoryController.GetAllCategories);

router.route('/:id') 
    .get(CategoryController.GetCategoryById)
    .patch(CategoryController.UpdateCategory)
    .delete(CategoryController.DeleteCategory);

module.exports = router;
