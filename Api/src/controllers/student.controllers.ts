import {Request, Response} from "express";
import {Student} from "../schemas/student.schema";
import {IStudent} from "../domain/domain";
import {body} from 'express-validator'

export class StudentControllers {
    async getAllStudents(req: Request, res: Response) {
        const students = await Student.find();
        res.status(200).json(students)
    }

    async createStudent(req: Request, res: Response) {
        const student: IStudent = req.body;
        await Student.findOne({email: student.email})
            .then((r) => {
                if (r === null) {
                    const s: IStudent = new Student({
                        name: student.name, email: student.email, age: student.age
                    })
                    Student.create(s)
                        .then(() => {
                            console.log('isAlive !!!')
                            res.status(200).json(s)
                        })
                        .catch((e) => {
                            res.status(200).json({e: e})
                        })
                } else {
                    res.status(409).json({message: "User already exist"})
                }
            })
            .catch((e) => res.send({error: e}))
    }
}