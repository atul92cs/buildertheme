const express=require('express');
const cloudinary=require('cloudinary');
const multer=require('multer');
const router=express.Router();
const storage=multer.diskStorage({
  filename:(req,file,callback)=>{
      callback(null,Date.now()+file.originalname);
  }
});
const upload=multer({storage:storage});
cloudinary.config({
    cloud_name:'dkhk4gyey',
  api_key:'459656749761335',
api_secret:'AS_y6ZzH7FAjeoIxF1IjtMFKzQg'
});
const project=require('../models/Project');
router.post('/add',upload.single('image'),async(req,res)=>{
    const Name=req.body.name;
    const Location=req.body.location;
    const Type=req.body.type;
    const Image=await cloudinary.v2.uploader.upload(req.file.path);
    project.create({
        Name:Name,
        Location:Location,
        Type:Type,
        Image:Image.url
        
    }).then(()=>{
          res.status(200).json({
              message:'Project added'
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
    project.destroy({where:{id:id}}).then(result=>{
        if(result===1)
        {
            res.status(200).json({
                message:'Project deleted'
            });
        }
        else
        {
            res.status(403).json({
                message:'Error occured'
            });
        }
    }).catch(err=>{
        res.status(405).json({
            message:'error occured',
            error:err
        });
    });
});
router.put('/:id',(req,res)=>{
    const id =req.params.id;
    const Name=req.body.name;
    const Location=req.body.location;
    //const Image=await cloudinary.v2.uploader.upload(req.file.path);
    const Type=req.body.type;
    const Status=req.body.status;
    project.update({Name:Name,Location:Location,Type:Type,Status:Status},{where:{id}}).then(()=>{
        res.status(200).json({
            message:'Project updated'
        });
    }).catch(err=>{
        res.status(403).json({
            message:'Error occured',
            error:err
   
        });        
    });
});

module.exports=router;