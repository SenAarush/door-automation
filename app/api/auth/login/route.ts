import connectDB from "@/app/utils/mongoDB"
import { loginZodSchema } from "@/app/validators/user"
import bcrypt from "bcryptjs"
import { NextResponse, NextRequest } from "next/server"
import getUserByParam from "../../getUserByParam"
import { generateToken } from "@/app/utils/jwt"

export async function POST(
    req: NextRequest
) : Promise<NextResponse> {
    try {
        await connectDB()

        const reqBody = await req.json()
        const validatedReqBody = loginZodSchema.safeParse(reqBody)

        if (!validatedReqBody.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: validatedReqBody.error.flatten(),
                },
                { status: 400 }
            )
        }

        const { 
            roll, 
            password 
        } = validatedReqBody.data

        const user = await getUserByParam(roll, "roll")
        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid Credentials",
                },
                { status: 404 }
            )
        }

        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid Credentials",
                },
                { status: 401 }
            )
        }

        const token = generateToken(user.roll, user.role)

        return NextResponse.json(
            {
                success: true,
                message: "Login successful",
                token,
                details: {
                    roll: user.roll,
                    name: user.name,
                    email: user.email,
                    branch: user.branch,
                    domain: user.domain,
                    role: user.role,
                },
            },
            { status: 200 }
        )
    } catch (error: any) {
        console.error("Error during login:", error)
        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            { status: 500 }
        )
    }
}
