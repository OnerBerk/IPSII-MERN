require('dotenv').config();
import {connectDB} from "./config/db"

const express = require('express')
const StudentRoutes = require('./routes/student.route')
const app = express()
const port = process.env.PORT || 8080
connectDB().catch((e) => console.log({error: e}));

app.use('/students', StudentRoutes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})