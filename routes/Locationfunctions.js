const express=require('express');
const router=express.Router();
const location=require('../models/Location');
router.post('/add',(req,res)=>{
    const Name=req.body.name;
    location.create({
      Name:Name
    }).then(()=>{
       res.status(200).json({
           message:'Location added'
       });
    }).catch(err=>{
          res.status(403).json({
              message:'Error occured',
              error:err
          });
    });
});
router.put('/:id',(req,res)=>{
    const id=req.params.id;
    const Name=req.body.name;
    location.update({Name:Name},{where:{id}}).then(()=>{
        res.status(200).json({
             message:'Location updated'
        });
    }).catch(err=>{
        res.status(403).json({
              message:'error occured',
              error:err
        });
    });
});
router.delete('/:id',(req,res)=>{
    const id=req.params.id;
    location.destroy({where:{id:id}}).then(result=>{
        if(result===1){
          res.status(200).json({
              message:'location deleted'
          });
        }
        else
        {
            res.status(403).json({
                message:'Error occured'
            });
        }
    }).catch(err=>{
            res.status(403).json({
                message:'error occured',
                error:err
            });
    });
});
module.exports=router;