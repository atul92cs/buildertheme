const express=require('express');
const router=express.Router();
const project=require('../models/Project');
router.get('/',(req,res)=>{
    project.findAll({}).then(result=>{
        const project=result;
        res.render('index',{projects:project});
    }).catch(err=>{
         console.log(err);
    });
});
module.exports=router;