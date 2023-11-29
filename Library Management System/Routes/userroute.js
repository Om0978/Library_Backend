const express=require("express");
const app = express();
const router=express.Router();
const userController = require('../Controller/userController');
const userDataControl=require('../Controller/datacontrol');


app.use('/user/register',userController.register)
app.use('/user/delete',userDataControl.deletedata)
app.use('/user/update',userDataControl.updatedata)
app.use('/user/get',userDataControl.getdata)
app.use("",router)

module.exports=app;