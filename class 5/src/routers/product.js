const  Route = require('express').Router();
const productController = require('../controller/product')

Route.get('/', productController.getAllproduct)
Route.get('/:id', productController.getProductbyId)
Route.post('/', productController.creatProduct)
Route.put('/:id', productController.updateProduct)
Route.delete('/:id', productController.deleteProduct)

module.exports = Route