const  Route = require('express').Router();
const orderController = require('../controller/order')
const {trycatch} = require('../middlewares/errorHandle')

Route.get('/',
  trycatch(orderController.getAllOrder));

Route.get('/:id',
  trycatch(orderController.getOrderById));

Route.post('/',
  trycatch(orderController.createOrder));

Route.put('/:id',
  trycatch(orderController.updateOrder));
  
Route.delete('/:id',
  trycatch(orderController.deleteOrder));

module.exports = Route