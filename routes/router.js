const express = require('express');
const checkToken = require('../middlewares/checkToken');
const { login }= require('../services/login');
const config = require('../config');
const { index }= require('../services/index');
const router =  express.Router();
router.options('/login', (req, res)=>{res.end()});
router.post('/login', login);
router.get('/', checkToken.checkToken, index);
router.options('/', (req, res)=>{res.end();});



module.exports=router
