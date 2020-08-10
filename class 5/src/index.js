const express = require('express')
const categoryRoute = require('./routers/categoryRouter')
const app = express()

// methot get post put(dung cho update) delete
const hamxuli = (req,res)=>{
    res.send('dmm')
}
app.get('/',hamxuli)
app.use('/api/vi/category',categoryRoute)




app.listen(8000, err =>{
    if(err){console.log(err)}
    console.log('Running')
})


// body query params    