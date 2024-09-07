import connectDB from "@/app/utils/mongoDB"
import { z } from "zod"
import { NextRequest, NextResponse } from "next/server"
import getUserByParam from "../../getUserByParam"
import attendanceModel from "@/app/models/attendence"

const roomZodSchema = z.object({
    id: z.string().min(1),
})

export async function POST(
    req: NextRequest
): Promise<NextResponse> {

    try {
        await connectDB()

        const reqBody = await req.json()
        const validatedReqBody = roomZodSchema.safeParse(reqBody)

        if (!validatedReqBody.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: validatedReqBody.error.flatten(),
                },
                { status: 400 }
            )
        }

        const { id } = validatedReqBody.data
        const roll = id.split("_")[0]
        const user = await getUserByParam(roll, "roll")

        if (!user) {
            return NextResponse.json({
                success: false,
                message: "Invalid User"
            }, { status: 404 })
        }

        const currentTime = new Date()
        const startOfDay = new Date()
        startOfDay.setHours(0, 0, 0, 0)

        const recentEntry = await attendanceModel.findOne({
            roll: roll,
            stillInRoom: true,
            updatedAt: { $gte: startOfDay }
        }).sort({ updatedAt: -1 })

        if (recentEntry) {

            await attendanceModel.updateOne(
                { _id: recentEntry._id },
                {
                    $set: {
                        logoutTime: currentTime,
                        stillInRoom: false
                    }
                }
            )

            return NextResponse.json({
                success: true,
                message: "Exited KRS Room",
            }, { status: 200 })
        } else {

            await attendanceModel.create({
                date: new Date(),
                roll: roll,
                stillInRoom: true,
                loginTime: currentTime
            })

            return NextResponse.json({
                success: true,
                message: "Entered KRS Room",
            }, { status: 200 })
        }

    } catch (error: any) {
        console.error(error)
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}
