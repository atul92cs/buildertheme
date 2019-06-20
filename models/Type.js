const sequelize=require('sequelize');
const db=require('../config/database');
const Type=db.define('Types',{
    Name:{
        type:sequelize.STRING
    }
});
module.exports=Type;