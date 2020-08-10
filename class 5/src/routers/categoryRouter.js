const express = require('express')
const { Router } = require('express')
const Route = express.Router()

const getAllCategory = (req,res) => {
    res.send('read all')
}
const getCategorybyID = (req,res) => {
    res.send('read id')
}
const creatCategory = (req,res)=>{
    res.send('created ')
}
const updateCategorybyID = (req,res) =>{
    res.send('updated')
}
const deleteCategorybyID = (req,res)=>{
    res.send('deleted')
}
Route.get('/', getAllCategory)
Route.get('/:id', getCategorybyID)
Route.post('/', creatCategory)
Route.put('/:id', updateCategorybyID)
Route.delete('/:id', deleteCategorybyID)

module.exports = Route