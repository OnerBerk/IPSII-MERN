const express = require('express')
const dotenv = require('dotenv')
import {Request, Response} from "express";

const app = express()
const port: string | number = process.env.PORT || 8080

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Mern')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})