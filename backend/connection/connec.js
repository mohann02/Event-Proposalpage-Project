const mongoose=require('mongoose');
mongoose.set('strictQuery',false)

async function getConnection(){
    await mongoose.connect('mongodb+srv://mohan:mohan123@cluster0.zsqta3l.mongodb.net/?retryWrites=true&w=majority').then(()=>{
        console.log("connection successful")
    }).catch((err)=>{
        console.log("no connection")
    })
}

module.exports=getConnection;