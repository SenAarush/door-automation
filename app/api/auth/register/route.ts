import connectDB from "@/app/utils/mongoDB"
import { NextRequest, NextResponse } from "next/server"
import { userZodSchema } from "@/app/validators/user"
import userModel from "@/app/models/user"
import { generateToken } from "@/app/utils/jwt"
import { z } from "zod"

type userType = z.infer<typeof userZodSchema>

async function getUserByRoll(
    roll: number
) {
    try {
        return await userModel.findOne({ roll: roll });
    } catch (error) {
        console.log(error)
        throw new Error("Error finding user in DB");
    }
}

async function saveUserToDB(
    data: userType
) {
    const newUser = new userModel({
        ...data,
    })
    try {
        return await newUser.save();
    } catch (error) {
        console.log(error)
        throw new Error("Error saving user to DB");
    }
}

export async function POST(
    req: NextRequest
) {
    await connectDB()

    const reqBody = await req.json()
    const validatedReqBody = userZodSchema.safeParse(reqBody)

    if (!validatedReqBody.success) {
        return NextResponse.json(
            {
                success: false,
                message: validatedReqBody.error,
            },
            { status: 400 }
        )
    }

    const {
        name,
        branch,
        domain,
        role,
        roll
    } = validatedReqBody.data

    const existingUser = await getUserByRoll(roll)
    if (existingUser) {
        return NextResponse.json(
            {
                success: true,
                message: "User already exists",
            },
            { status: 200 }
        )
    }

    const createdUser = await saveUserToDB({
        name,
        branch,
        domain,
        role,
        roll,
    })

    const token = generateToken(createdUser.roll, role);

    return NextResponse.json(
        {
            success: true,
            message: "User created successfully",
            user: createdUser,
            token: token,
        },
        { status: 201 }
    )

}
