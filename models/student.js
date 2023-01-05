import mongoos, { model,Schema } from "mongoose";

const studentSchema =new Schema({
 roll:Number,
 fullName:String,
 mobile: Number
});

const student = model("student",studentSchema)

export default student;