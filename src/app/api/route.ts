import Connect from "@/database/connection";
import Lesson from "@/database/model/lesson.schema";
import User from "@/database/model/user.schema";

export async function GET() {
    Connect();
    User.create({
        userName:"rangee",
        userEmail:"rangee@gmail.com",
        userPicture:"picture"
    })

    Lesson.create({
        course:"NextJs",
        lecturer:"Rangee",
        lessonTitle:"Next_0"
    })

    return Response.json({
        message:"tapai le data paunu vo"
    })
}