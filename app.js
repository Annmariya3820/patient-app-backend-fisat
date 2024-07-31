const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const json = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const LoginModel = require("./models/Admin")


const app=express()
app.use(cors())
app.use(express.json())

//admin signup

app.post("/adminsignin",(req,res)=>{
    let input=req.body
    let hashedpassword= bcrypt.hashSync(input.password,10)
    input.password=hashedpassword
    console.log(input)
    let result = new LoginModel(input)
    result.save()
    res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("server started")
})