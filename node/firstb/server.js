import dotenv from 'dotenv'
dotenv.config()

import express from 'express'

const app = express()

app.get("/", (req, res)=>{
    console.log("Server Started From Server")
    res.json({Massage : "Get Started"})
})

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log("Tumhara Server satart ho gya hai")
})