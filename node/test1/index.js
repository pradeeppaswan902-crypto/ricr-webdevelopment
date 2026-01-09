import dotenv from "dotenv"
dotenv.config()

import express from 'express'

const app = express()

app.get("/", (req, res)=>{
    console.log("server Started")
    res.json({Massage : "Working"})
})

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log("started Port at",port)
})