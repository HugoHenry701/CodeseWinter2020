const mysql = require('mysql')

const config = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password:'Ttha527218',
    database:'hieu'
}
const pool = mysql.createPool(config)
module.exports = pool;