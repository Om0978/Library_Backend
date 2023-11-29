const uri = "mongodb+srv://om0978:754q9i4y@cluster0.zo3lqog.mongodb.net/?retryWrites=true&w=majority";
const mongoose=require("mongoose");
const dbconnect=()=>{
mongoose.connect((uri),{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("database connect hogya")
})
.catch((e)=>{
    console.log("Error:-database connect nhi hua");
})
}

module.exports=dbconnect;