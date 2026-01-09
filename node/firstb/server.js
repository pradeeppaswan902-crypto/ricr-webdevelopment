import dotenv from 'dotenv'
dotenv.config();
import express, { json } from 'express'

const app = express();
app.get("/",(req, res)=>{
    console.log("Server Is Running")
    res.json({Massage : "Server is Runing Suceessfully"})
})

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    
    console.log("Server Started At Port",port)
})
 