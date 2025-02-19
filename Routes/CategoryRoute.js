const express = require('express');
const CategoryController = require('../Controller/CategoryController');
const router = express.Router();

router.post('/', CategoryController.CreateCategory);

module.exports = router;
