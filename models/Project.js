const sequelize=require('sequelize');
const db=require('../config/database');
const Project=db.define('Projects',{
    Name:{
        type:sequelize.STRING
    },
    Location:{
        type:sequelize.INTEGER
    },
    Type:{
        type:sequelize.INTEGER
    },
    Status:{
        type:sequelize.INTEGER
    },
    Image:{
        type:sequelize.STRING
    }

});

module.exports=Project;