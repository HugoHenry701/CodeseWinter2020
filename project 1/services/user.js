const db = require('../utils/db')

const getAllClass = async () =>{
    const sql=`
    select * from class;
    `
    const data = await db.queryMulti(sql)
    return{
        data
    }
}
const getStudentInClass = async (idClass)=>{
    const sql =`
    select fullName,gender,age,idStudent
    from student
    where idClass=?;
    `
    const data = await db.queryMulti(sql,idClass)
    return{
        data
    }
}
const getStudent = async (idStudent)=>{
    const sql=`
    select *
    from student
    where idStudent = ?; 
    `
    const data = await db.queryOne(sql,idStudent)
    return{
        data
    }
}

module.exports={
    getAllClass,
    getStudentInClass,
    getStudent
}