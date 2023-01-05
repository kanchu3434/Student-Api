import express from "express"
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

import student from "./models/student.js";

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL,()=>{
    console.log('Connected to Mongodb');
})



app.get("/health",(req,res)=>{
   res.json({
    status:"ok",
    message:"All Good"
   }) 
})

app.post('/create-student',async(req,res)=>{
const {roll,fullName,mobile} = req.body

const newStudent = new student({
   roll:roll,
   fullName:fullName,
   mobile:mobile 
})

const savedStudent = await newStudent.save()

res.json({
    success:true,
    data:savedStudent
})

})



app.listen(5000, () => {
    console.log("server is running on port 5000")
})