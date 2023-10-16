require('dotenv').config();
import {connectDB} from "./config/db"

const bodyParser = require('body-parser')

const port = process.env.PORT || 8080
const express = require('express')
const StudentRoutes = require('./routes/student.route')
const app = express()



app.use(bodyParser.json());
app.use( bodyParser.urlencoded({
        extended: true,
    }),);
app.use('/students', StudentRoutes)
connectDB().catch((e) => console.log({error: e}));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})