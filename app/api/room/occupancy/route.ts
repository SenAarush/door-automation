import connectDB from "@/app/utils/mongoDB"
import { NextRequest, NextResponse } from "next/server"
import checkAuthAccess from "../../checkAuthAccess"
import attendanceModel from "@/app/models/attendence"
import { AuthData } from "@/app/types/auth"

export async function GET(
    req: NextRequest
): Promise<NextResponse> {
    try {
        await connectDB()

        const token = req.headers.get("authorization") as string
        const authenticatedData: AuthData | false = checkAuthAccess(token, ["Admin", "admin"])

        if (!authenticatedData) {
            return NextResponse.json({
                message: "Unauthorized Access"
            }, { status: 401 })
        }

        const startOfDay = new Date()
        startOfDay.setHours(0, 0, 0, 0)

        const membersInRoom = await attendanceModel.countDocuments({
            stillInRoom: true, 
            updatedAt: {
                $gte: startOfDay  
            }
        })

        return NextResponse.json({
            success: true,
            message: "Calculated Occupancy",
            data: {
                membersInRoom
            }
        }, { status: 200 })

    } catch (error: any) {

        console.error(error)
        return NextResponse.json({
            message: error.message
        }, { status: 500 })

    }

}