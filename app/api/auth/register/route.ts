import connectDB from "@/utils/mongoDB"
import { NextRequest, NextResponse } from "next/server"
import { userZodSchema } from "@/validators/user"
import userModel from "@/models/user"
import { generateToken } from "@/utils/jwt"
import { z } from "zod"
import getUserByParam from "../../getUserByParam"
import { genHashPassword } from "@/utils/bcryptjs"
import mongoose from "mongoose"

type userType = Omit<z.infer<typeof userZodSchema>, "cPassword">;

interface UserDocument extends mongoose.Document{
    name: string
    email: string
    password: string
    roll: number
    branch: string
    domain: string
    roles: string[]
    archived: boolean
    createdAt: Date
    updatedAt: Date
}

async function saveUserToDB(
    data: userType
): Promise<UserDocument> {
    const newUser = new userModel({
        ...data,
    })
    try {
        return await newUser.save()
    } catch (error) {
        console.log(error)
        throw new Error("Error saving user to DB")
    }
}

export async function POST(
    req: NextRequest
): Promise<NextResponse> {
    try {
        await connectDB();

        const reqBody = await req.json();
        const validatedReqBody = userZodSchema.safeParse(reqBody);

        if (!validatedReqBody.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: validatedReqBody.error.flatten(),
                },
                { status: 400 }
            );
        }

        const {
            name,
            email,
            password,
            cPassword,
            branch,
            domain,
            roles,
            roll
        } = validatedReqBody.data

        if (password !== cPassword) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Passwords do not match",
                },
                { status: 400 }
            )
        }

        if (Number(email.split("@")[0]) !== roll) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email and Roll number do not match",
                },
                { status: 400 }
            )
        }

        const existingUser = await getUserByParam(roll, "roll")

        if (existingUser) {
            return NextResponse.json(
                {
                    success: false,
                    message: "User already exists",
                },
                { status: 409 }
            )
        }

        const hashedPassword = await genHashPassword(password, 12)

        const createdUser = await saveUserToDB({
            name,
            email,
            password: hashedPassword,
            branch,
            domain,
            roles,
            roll
        })

        const token = generateToken(createdUser.roll, roles)

        return NextResponse.json(
            {
                success: true,
                message: "User created successfully",
                user: createdUser,
                token: token,
            },
            { status: 201 }
        )

    } catch (error: any) {

        console.log("Error creating user", error)

        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            { status: 500 }
        )
    }
}
