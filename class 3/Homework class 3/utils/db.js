const mysql = require('mysql')

const config = {
    host: 'codedidungso.me',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'hieu'
}

const pool = mysql.createPool(config)

module.exports = pool;