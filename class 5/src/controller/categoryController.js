const categoryService = require('../services/categoryService');

const getAllCategory = async (req, res) => {
    try {
        const { data, metadata } = await categoryService.getAllcategory(req.pagination)
        res.send({
            status: 1,
            data,
            metadata
        })
    } catch (err) {
        console.log(err);
        res.send(err)
    }

}
const getCategorybyID = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await categoryService.getCategorybyId(id)
        res.send({
            status: 1,
            data
        })
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}
const creatCategory = async (req, res) => {
    try {
        await categoryService.creatCategory(req.body)
        res.send("New category has been created")
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}
const updateCategorybyID = async (req, res) => {
    try {
        const { id } = req.params;
        await categoryService.updateCategorybyId(reg.body, id)
        res.send('Update data successful')
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}
const deleteCategorybyID = async (req, res) => {
    try {
        const { id } = req.params;
        await categoryService.deleteCategorybyId(id)
        res.send({
            status: 'Delete successfully'
        })
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

module.exports = {
    getAllCategory,
    getCategorybyID,
    creatCategory,
    updateCategorybyID,
    deleteCategorybyID,
}