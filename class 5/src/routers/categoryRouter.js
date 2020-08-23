const express = require('express')
const Route = express.Router()
const categoryController = require('../controller/categoryController')
const { trycatch } = require('../middlewares/errorHandle')
Route.get('/',
    trycatch(categoryController.getAllCategory))
Route.get('/:id',
    trycatch(categoryController.getCategorybyID))
Route.post('/',
    trycatch(categoryController.creatCategory))
Route.put('/:id',
    trycatch(categoryController.updateCategorybyID))
Route.delete('/:id',
    trycatch(categoryController.deleteCategorybyID))

module.exports = Route