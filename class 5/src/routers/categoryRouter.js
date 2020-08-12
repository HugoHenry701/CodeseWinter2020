const pool = require('../utils/db')
const express = require('express')
const { Router } = require('express')
const Route = express.Router()
const fs = require('fs')
const path = require('path')

const getAllCategory = (req, res) => {
    pool.query('select * from `category`', (err, data) => {
        if (err) { console.log(err) }
        res.send(data)
    })
}
const getCategorybyID = (req, res) => {
    const id = `'5f80806d-a95a-3fcb-830f-7817a4c11a6d'`
    pool.query(`select * from category where categoryId = ${id} `,(err,data)=>{
        if(err){console.log(err)}
        res.send(data)
    })
}
const creatCategory = (req, res) => {
    const dbquery = fs.readFileSync(path.join(__dirname, '../utils/dbinsert.sql')).toString();
    pool.query(dbquery, (err) => {
        if (err) { console.log(err) }
        res.send('Created database successfully')
    })
}
const updateCategorybyID = (req, res) => {
    const id = `'5f80806d-a95a-3fcb-830f-7817a4c11a6d'`
    pool.query(`update category
    set  display = 'hieudz', description = 'hieu is always pro', imageUrl = 'facebook HieuQuang'
    where categoryId = ${id}`,(err)=>{ 
        if(err){console.log(err)}   
        res.send('updated successfully')
    })
}
const deleteCategorybyID = (req, res) => {
    const id = `'5f80806d-a95a-3fcb-830f-7817a4c11a6d'`
pool.query(`Delete from category where categoryID = ${id};
`,(err)=>{
    if(err){console.log(err)}
    res.send('deleted')
})
}
Route.get('/', getAllCategory)
Route.get('/:id', getCategorybyID)
Route.post('/', creatCategory)
Route.put('/:id', updateCategorybyID)
Route.delete('/:id', deleteCategorybyID)

module.exports = Route