const express = require('express')
const Route = express.Router()
const parameter = require('../controller/parameter')
const { trycatch } = require('../middlewares/errorHandle')

Route.get('/list-category-id', trycatch(parameter.parameterCategory))
Route.get('/list-product-id', trycatch(parameter.parameterProduct))
Route.get('/list-account-id', trycatch(parameter.parameterAccount))
Route.get('/list-order-id', trycatch(parameter.parameterOrder))

module.exports = Route