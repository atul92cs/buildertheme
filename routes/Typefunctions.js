const express=require('express');
const router=express.Router();
const type=require('../models/Type');
router.post('/add',(req,res)=>{
    const Name=req.body.name;
    type.create({
        Name:Name
        }).then(()=>{
           res.status(200).json({
               message:'type created'
           });
        }).catch(err=>{
           res.status(403).json({
               message:'error occured',
               error:err
           });
        });
});
router.put('/update/:id',(req,res)=>{
    const id=req.params.id;
    const Name=req.body.name;
    type.update({Name:Name},{where:{id}}).then(()=>{
        res.status(200).json({
            message:'Type updated'
        });
    }).catch(err=>{
          res.status(403).json({
            message:'error occured',
            error:err
          });
    });
});
router.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    type.destroy({where:{id:id}}).then(result=>{
          if(result==1)
          {
              res.status(200).json({
                  message:'type deleted'
              });
          }
          else
          {
              res.status(403).json({
                  message:'error occured'
              });
          }
    }).then(err=>{
        res.status(405).json({
            message:'error occured',
            error:err
        });
    });
});
module.exports=router;