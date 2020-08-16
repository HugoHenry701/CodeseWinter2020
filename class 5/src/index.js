const express = require('express')
const categoryRoute = require('./routers/categoryRouter')
const parameter = require('./routers/parameter')
const productRoute = require('./routers/product')
const bodyparser = require('body-parser')
// const morgan = require('morgan')
// const rfs = require('rotating-file-stream')
const pagination = require('./middlewares/pagination')
let app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
// methot get post put(dung cho update) delete
// var accessLogStream = rfs.creatStream('')
// app.use(morgan('combined', { stream: accessLogStream }))
app.use(pagination)
app.use((req, res, next) => {
    console.log('paging', req.pagination);
    next()
})
const middleware = (req, res, next) => {
    console.log(Date());
    next()
}
const hamxuli = (req, res) => {
    res.send('Welcome')
}

app.get('/', hamxuli)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/parameter',parameter)
app.use('/api/v1/product',productRoute)
app.use(middleware)
let port = 8000;
app.listen(port, err => {
    if (err) { console.log(err) } else {
        console.log(`App listen at ${port}`)
    }
})



// router -> controller -> services


// body query params    
// sau dau '?' la query
// dang sau dau '/' la param
// su dung .env su dung dotenv ma hoa password
