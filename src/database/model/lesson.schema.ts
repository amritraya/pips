import mongoose,{Mongoose, Schema} from "mongoose";

const lessonSchema=new Schema(
    {
        course:{
            type: String,
            required: true
        },
        lecturer:{
            type: String,
            required: true
        },
        lessonTitle:{
            type:String,
            required: true
        }
    }
)

const Lesson=mongoose.models.Lesson||mongoose.model("Lesson",lessonSchema)

export default Lesson