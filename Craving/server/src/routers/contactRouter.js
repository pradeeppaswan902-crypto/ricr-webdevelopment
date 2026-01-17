import express from 'express'
import {userContact} from "../controller/mycontroler.js"

const RontactRouter = express.Router() 

RontactRouter.post("/ contact", userContact)

export default RontactRouter 