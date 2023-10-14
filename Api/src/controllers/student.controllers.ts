import {Request, Response} from "express";
import {Student} from "../schemas/student.schema";

export class StudentControllers {
    async getAllStudents(req: Request, res: Response) {
        const students = await Student.find();
        console.log(students)
        res.send({
            students: students
        })
    }
}