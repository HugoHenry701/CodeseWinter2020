const db = require('../utils/db')
const { deleteCategorybyID } = require('../controller/categoryController')

const getAllcategory = async () => {
    const sql = 'select * from category;'
    const data = await db.queryMulti(sql)
    return data
}
const getCategorybyId = async (id) => {
    const sql = `select * from category where categoryId = ?;`
    const data = await db.queryOne(sql, [id])
    return data
}
const creatCategory = async (newCategory) => {
    const sql = `insert into category
    set ?;`
    const data = await db.query(sql, newCategory)
    return data
}
const updateCategorybyId = async (updateCategory, id) => {
    const sql = `update category set ? where categoryId = ?`
    const data = await db.query(sql, [updateCategory, id])

}
const deleteCategorybyId = async (deletedCategory,id) => {
 const sql = `update category set ? where categoryId = ?`
 const data = await db.query(sql,[deletedCategory,id])
}

module.exports = {
    getAllcategory,
    getCategorybyId,
    creatCategory,
    updateCategorybyId,
    deleteCategorybyId
}





