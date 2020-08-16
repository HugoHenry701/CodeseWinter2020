const express = require('express')
const Route = express.Router()
const parameter = require('../controller/parameter')

Route.get('/list-category-id',parameter.getAllCategoryID)

module.exports = Route