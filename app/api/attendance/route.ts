import { NextRequest, NextResponse } from "next/server";

import checkAuthAccess from "../checkAuthAccess";

import attendanceModel from "@/models/attendence";
import userModel from "@/models/user";

import connectDB from "@/utils/mongoDB";

import { AuthData } from "@/types/auth"

export async function GET(
    req: NextRequest,
): Promise<NextResponse> {
    try {

        // test

        const userRoll = 22052342;

        const results = await userModel.aggregate([
            {
                $match: { roll: userRoll }
            },
            {
                $lookup: {
                    from: "attendances",
                    localField: "roll",
                    foreignField: "roll",
                    as: "result"
                }
            },
            { $project: { result: 1 } }
        ])



        // const token = req.headers.get("authorization") as string
        // const authenticatedData: AuthData | false = checkAuthAccess(token, ["Admin", "admin"])

        // if (!authenticatedData) {
        //     return NextResponse.json({
        //         message: "Unauthorized Access"
        //     }, { status: 401 })
        // }

        return NextResponse.json({
            success: true,
            message: "Fetched All attendence data",
            data: {
                results
            }
        }, { status: 200 })

    } catch (error: any) {

        console.error(error)
        return NextResponse.json({
            message: error.message
        }, { status: 500 })

    }

}