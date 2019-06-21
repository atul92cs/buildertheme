const express=require('express');
const sequelize=require('sequelize');
const router=express.Router();
const project=require('../models/Project');
const type=require('../models/Type');
const location=require('../models/Location');
router.get('/',(req,res)=>{
    project.sequelize.query('select Projects.Name,Projects.Image,Types.Name as type,Locations.Name as location from Projects JOIN Types on Projects.Type=Types.id JOIN Locations on Projects.Location=Locations.id',{type:project.sequelize.QueryTypes.SELECT}).then(result=>{
        
        const project=result;
        res.render('index',{projects:project});
    }).catch(err=>{
         console.log(err);
    });
});
router.get('/addproperty',(req,res)=>{
    type.findAll({}).then(result=>{
       const types=result;
       location.findAll({}).then(result=>{
           const locations=result;
           res.render('addproperty',{Types:types,Locations:locations});
       }).catch(err=>{
           res.status(405).json({
               message:'error occured',
               error:err
           });
       });
    }).catch(err=>{
        res.status(403).json({
            message :'error oocured',
            error:err
        });
    });
});
module.exports=router;