const db = require('../utils/db')
const getAllcategory = async ({limit, offset}) => {
    const sql = `select * from category
    limit ?
    offset ?`
    const data = await db.queryMulti(sql,[limit, offset])
    const countsql = `
    select count(categoryId) as total from category`
    const { total } = await db.queryOne(countsql)
    return {
        data,
        metadata: {
            length: data.length,
            total
        }
    }
}
const getCategorybyId = async (id) => {
    const sql = `select * from category where categoryId = ? and isDelete = 0;`
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
    const sql = `update category set ? where categoryId = ? and isDelete = 0`
    const data = await db.query(sql, [updateCategory, id])

}
const deleteCategorybyId = async (deletedCategory, id) => {
    const sql = `update category
    set isDelete =1
    where categoryId = ?`
    await db.query(sql, [id])
}
const getAllCategoryId = async ()=>{
    const sql =`
    select categoryId,display
    from category
    where isDelete=0`
    const data = await db.queryMulti(sql);
    return{
        data,
        metadata:{
            length: data.length
        }
    }
}

module.exports = {
    getAllcategory,
    getCategorybyId,
    creatCategory,
    updateCategorybyId,
    deleteCategorybyId,
    getAllCategoryId
}





