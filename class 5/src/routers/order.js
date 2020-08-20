const  Route = require('express').Router();
const orderController = require('../controller/order')

Route.get('/', orderController.getAllOrder)
Route.get('/:id', orderController.getOrderbyId)
Route.post('/', orderController.creatOrder)
Route.put('/:id', orderController.updateOrder)
Route.delete('/:id', orderController.deleteOrder)

module.exports = Route