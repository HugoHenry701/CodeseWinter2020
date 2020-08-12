const express = require('express')
const categoryRoute = require('./routers/categoryRouter')
const app = express()

// methot get post put(dung cho update) delete
const hamxuli = (req,res)=>{
    res.send('Welcome')
}
app.get('/',hamxuli)
app.use('/api/v1/category',categoryRoute)



let port = 8000;
app.listen(port, err => {
    if (err) { console.log(err) } else {
        console.log(`App listen at ${port}`)
    }
})


// body query params    