const Router = require('express').Router();

Router.get("/", (req,res)=>{
    res.render("homePage")
})

module.exports = Router;