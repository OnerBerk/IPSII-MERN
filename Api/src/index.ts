const express = require('express')
require('dotenv').config();
import {Request, Response} from "express";
import {json} from 'body-parser'
import {connectDB} from "./config/db"

const app = express()
const port = process.env.PORT || 8080
connectDB();
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Mern')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})