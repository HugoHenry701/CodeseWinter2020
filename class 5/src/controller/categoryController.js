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
        const data = await categoryService.getCategorybyId(id)
        res.send({
            status: 1,
            data: data
        })
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}
const creatCategory = async (req, res) => {
    try {
        const newCategory = {
            categoryId: req.body.categoryId,
            display: req.body.display,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        };
        const data = await categoryService.creatCategory(newCategory)
        res.send("New category has been created")
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}
const updateCategorybyID = async (req, res) => {
    try {
        const { id } = req.params;
        const updateCategory = {
            display: req.body.display,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        };
        const data = await categoryService.updateCategorybyId(updateCategory, id)
        res.send('Update data successful')
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}
const deleteCategorybyID = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = {
            display: req.body.display,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        };
        const data = await categoryService.deleteCategorybyId(deletedCategory, id)
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