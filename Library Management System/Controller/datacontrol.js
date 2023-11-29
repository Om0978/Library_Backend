const userdata=require("../model/userModel");


// Get Data
exports.getdata=async(req,res)=>{
    try{
        const data = await userdata.findOne({Book_Code:req.body.Book_Code});
        res.send("data"+data)
    }
    catch(erro){
        console.log("Error "+erro.message);
    }
}



// Delete Data
exports.deletedata=async(req,res)=>{
    try{
        const user=await userdata.findOneAndDelete({Book_Code:req.body.Book_Code});
        res.send(user)
    }
    catch(error){
        console.log("Error"+error.message);
    }
}


// Update Data
exports.updatedata = async(req,res)=>{
    try{
        const user=await userdata.findOneAndUpdate({Book_Code:req.body.Book_Code},{Book_name:req.body.Book_name,Author_name:req.body.Author_name,Publisher_name:req.body.Publisher_name,Price:req.body.Price},{new:true});
        res.send(user);
    }
    catch(erro){
        console.log("Error "+erro.message);
    }
}