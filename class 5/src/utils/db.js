const mysql = require('mysql')

const config = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'Ttha527218',
    database: 'hieu'
}
const pool = mysql.createPool(config)
const query = (sql, params) => {
    return new Promise((resolve, reject)=>{
        pool.query(sql,params,(err,result)=>{
            if(err)reject(err)
            else resolve()
        })
    })
}
// return (q,p).then().catch(err).finally(nhat ky)
const queryOne = (sql, params) => {
    return new Promise((resolve, reject)=>{
        pool.query(sql,params,(err,result)=>{
            if(err)reject(err)
            else resolve(result[0])
        })
    })
}
const queryMulti = (sql, params) => {
    return new Promise((resolve, reject)=>{
        pool.query(sql,params,(err,result)=>{
            if(err){
                console.log(err);
                reject(err)
            }
            else resolve(result)
        })
    })
}
module.exports = {
    query,
    queryMulti,
    queryOne
}