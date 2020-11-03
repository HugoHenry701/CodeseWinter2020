const R = require('express').Router();
const userController = require('../controller/user');

R.get('/',userController.getAllClass);
R.get('/class/:id',userController.getStudentInClass);
R.get('/student/:id',userController.getStudent)

module.exports = R;