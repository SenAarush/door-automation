import { NextRequest, NextResponse } from "next/server";

import checkAuthAccess from "../checkAuthAccess";

import userModel from "@/models/user";

import connectDB from "@/utils/mongoDB";

import { AuthData } from "@/types/auth"

export async function GET(
    req: NextRequest,
): Promise<NextResponse> {
    try {
        // const token = req.headers.get("authorization") as string
        // const authenticatedData: AuthData | false = checkAuthAccess(token, ["Admin", "admin"])

        // if (!authenticatedData) {
        //     return NextResponse.json({
        //         message: "Unauthorized Access"
        //     }, { status: 401 })
        // }

        const results = await userModel.countDocuments({})

        
        return NextResponse.json({
            success: true,
            message: "Fetched Total User Count",
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