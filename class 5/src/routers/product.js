const  Route = require('express').Router();
const productController = require('../controller/product')
const {trycatch} = require('../middlewares/errorHandle')
Route.get('/',
  trycatch(productController.getAllProduct));

Route.get('/:id',
  trycatch(productController.getProductById));

Route.post('/',
  trycatch(productController.createProduct));

Route.put('/:id',
  trycatch(productController.updateProduct));
  
Route.delete('/:id',
  trycatch(productController.deleteProduct));

module.exports = Route