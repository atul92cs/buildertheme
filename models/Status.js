const sequelize=require('sequelize');
const db=require('../config/database');
const Status=db.define('Status',{
    Name:{
        type:sequelize.STRING
    }
});
module.exports=Status;