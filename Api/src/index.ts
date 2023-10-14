import {Student} from "./schemas/student.schema";

const express = require('express')
require('dotenv').config();
import {Request, Response} from "express";
import {connectDB} from "./config/db"

const app = express()
const port = process.env.PORT || 8080
connectDB().catch((e) => console.log({error: e}));
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Mern')
})

app.get('/students', async (req: Request, res: Response) => {
    const students = await Student.find();
    res.json({students: students})
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})