import {StudentControllers} from "../controllers/student.controllers";

const router = require('express').Router()
const studentC = new StudentControllers()

router.get('/', studentC.getAllStudents);
router.post('/save', studentC.createStudent)

module.exports = router
