const express = require('express');
const cookiParser = require("cookie-parser");
const cors = require("cors");
require('dotenv').config()
const db = require('./config/database')


const app = express();

const port = process.env.PORT;
app.use(
    cors({
        origin:'http://localhost:3000/',
        methods: ['GET','POST', 'DELETE', 'PUT'],
        allowedHeaders:[
            "Content-Type",
            "Authorization",
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials:true
    })
)
app.use(cookiParser());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("welcome home page");
});





app.listen(port,(req,res)=>{
  console.log("server is running on port: ", port)
})