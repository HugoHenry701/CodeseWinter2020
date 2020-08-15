const express = require('express')
const { Router } = require('express')
const Route = express.Router()
const categoryController = require('../controller/categoryController')

Route.get('/', categoryController.getAllCategory)
Route.get('/:id', categoryController.getCategorybyID)
Route.post('/', categoryController.creatCategory)
Route.put('/:id', categoryController.updateCategorybyID)
Route.delete('/:id', categoryController.deleteCategorybyID)

module.exports = Route