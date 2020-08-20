const express = require('express')
const Route = express.Router()
const parameter = require('../controller/parameter')

Route.get('/list-category-id',parameter.parameterCategory)
Route.get('/list-product-id',parameter.parameterProduct)
Route.get('/list-account-id',parameter.parameterAccount)
Route.get('/list-order-id',parameter.parameterOrder)

module.exports = Route