import express from "express"
import postRouter from "./routes/posts.js"
import bodyParser from "body-parser"
import cors from "cors";
import { DATABASE, PORT, URL } from "./config.js";
import mongoose from "mongoose";

const app = express()

const port = PORT
const url = URL
const db = DATABASE

app.use(bodyParser.json())
app.use(postRouter)
app.use(cors())

mongoose.connect(url, {dbName:db})
.then(()=>{
    app.listen(port, ()=>{
        console.log('App running on port '+port);
    })
})
.catch(error=>console.log(error.message))
