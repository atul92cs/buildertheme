const express=require('express');
const bodyparser=require('body-parser');
const exphbs=require('express-handlebars');
const type=require('./routes/Typefunctions');
const location=require('./routes/Locationfunctions');
const project=require('./routes/Projectfunctions');
const app=express();
const PORT=process.env.PORT||8080;
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use('/type',type);
app.use('/location',location);
app.use('/project',project);
app.listen(PORT,()=>{
    console.log('server started on '+PORT);
});