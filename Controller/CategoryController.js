const Category = require('../models/CategorySchema');
const slugify = require('slugify');
const asyncWrapper = require('../middlewares/asyncWrapper');
const http_status = require('../utils/http_status');
const mongoose = require('mongoose');
const AppError = require('../utils/AppError');

// @desc    Create category
// @route   POST  /api/category
// @access  Private/Admin-Manager
const CreateCategory = asyncWrapper(
    async(req, res, next) => {
        const { name } = req.body

        if (!name || typeof name !== 'string' || name.trim().length === 0) {
            return next(new AppError("Category name is required and must be a string", 400, http_status.ERROR));
        }
        const newCategory = new Category({
            name,
            slug: slugify(name),
        });


        await newCategory.save()
        res.status(201).json(newCategory);
});

// @desc    Get list of categories
// @route   GET /api/category
// @access  Public
const GetAllCategories = asyncWrapper(
    async(req, res, next) => {
        // pagination
        const page = +req.query.page || 1;
        const limit = +req.query.limit || 5;
        const skip = (page - 1) * limit;

        const categories = await Category.find({}).skip(skip).limit(limit);
        res.status(200).json({result: categories.length, page, data: categories});
});


// @desc    Get specific category by id
// @route   GET /api/category/:id
// @access  Public
const GetCategoryById = asyncWrapper(
    async(req, res, next) => {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(new AppError("Invalid category ID format", 400, gtatus.BAD_REQUEST));
        }
        
        const category = await Category.findById(id);
        if (!category) {
            return next(new AppError("Category not found", 404, http_status.ERROR));
        }
        res.status(200).json(category);
    
});


// @desc    Update specific category
// @route   PATCH /api/category:id
// @access  Private/Admin-Manager
const UpdateCategory = asyncWrapper(
    async(req, res, next) => {
        const id = req.params.id;
        const { name } = req.body;


        

        if (!name || typeof name !== 'string' || name.trim().length === 0) {
            return next(new AppError("Category name is required and must be a string", 400, http_status.ERROR));
        }

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(new AppError("Invalid category ID format", 400, "BAD_REQUEST"));
        }

        const updateCategory = await Category.findByIdAndUpdate(
            id, 
            { name, slug: slugify(name) },
            { new: true, runValidators: true }
        );

        if (!updateCategory) {
            return next(new AppError("Category not found", 404, http_status.ERROR));
        }
        res.status(200).json(updateCategory);
});



// @desc    Delete specific category
// @route   DELETE /api/category/:id
// @access  Private/Admin-Manager
const DeleteCategory = asyncWrapper(
    async(req, res, next) => {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(new AppError("Invalid category ID format", 400, "BAD_REQUEST"));
        }


        const deleteCategory = await Category.findByIdAndDelete(id);
        if (!deleteCategory) {
            return next(new AppError("Category not found", 404, http_status.ERROR));
        }
        res.status(200).json({ message: "Category deleted successfully" });
})


module.exports = {
    CreateCategory,
    GetAllCategories,
    GetCategoryById,
    UpdateCategory,
    DeleteCategory
}