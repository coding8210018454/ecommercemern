const mongoose = require('mongoose')

const db = mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("mongodb connected successfully")
}).catch((err)=>console.log("db not connected!"))




module.exports=db;