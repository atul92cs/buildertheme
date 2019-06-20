const sequelzie=require('sequelize');
const db=require('../config/database');
const Location=db.define('Locations',{
    Name:{
        type:sequelzie.STRING
    }
});
module.exports=Location;