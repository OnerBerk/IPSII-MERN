import mongoose ,{Schema,model}from "mongoose";
import {IStudent} from "../domain/domain";

const StudentSchema = new Schema<IStudent>({
    name: {type:String,required:true},
    age: Number,
    email: {type: String, unique: true}
})
export const Student=model<IStudent>('student', StudentSchema,'students')