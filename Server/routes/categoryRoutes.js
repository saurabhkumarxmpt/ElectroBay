// Import required packages
const express = require('express');

// Initialize the Router
const router = express.Router();

// Import controller functions
const {
    newCategory,
    Allcategories,
    deleteCategory
} = require('../controllers/categoryController'); // Category controller methods

// Import multer middleware for image upload
const upload = require('../utils/multer');

// @route   POST /api/categories
// @desc    Add a new category with an image
// @access  Public or Protected (depends on middleware added later)
router.post('/', upload.single('image'), newCategory);

// @route   GET /api/categories/findAll
// @desc    Get all categories
// @access  Public
router.get('/findAll', Allcategories);

// @route   DELETE /api/categories/:id
// @desc    Delete a category by ID
// @access  Public or Protected
router.delete('/:id', deleteCategory);

// Export the router to be used in main server file
module.exports = router;
