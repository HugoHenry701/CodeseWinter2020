const userService = require('../services/user')

const getAllClass = async (req, res) => {
    const { data } = await userService.getAllClass()
    res.send({
        status: 1,
        data
    })
}
const getStudentInClass = async (req, res) => {
    const idClass = req.params.id;
    const { data } = await userService.getStudentInClass(idClass)
    res.send({
        status: 1,
        data
    })
}
const getStudent = async(req, res)=> {
    const idStudent = req.params.id;
    const { data } = await userService.getStudent(idStudent)
    res.send({
        status: 1,
        data
    })
}
module.exports = {
    getAllClass,
    getStudentInClass,
    getStudent
}