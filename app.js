const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const json = require("jsonwebtoken")
const bcrypt = require("bcrypt")


let app=express()

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(8080,()=>{
    console.log("server started")
})