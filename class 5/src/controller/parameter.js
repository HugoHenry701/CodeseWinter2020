const categoryService = require('../services/categoryService');

const getAllCategoryID = async (req, res) => {
    console.log(req.pagination);
    const { data, metadata } = await categoryService.getAllCategoryId()
    res.send({
        data,
        metadata
    })
}
module.exports = {getAllCategoryID}
