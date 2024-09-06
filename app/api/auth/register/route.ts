import connectDB from "@/app/utils/mongoDB"
import { NextRequest, NextResponse } from "next/server"
import { userZodSchema } from "@/app/validators/user"
import userModel from "@/app/models/user"
import { generateToken } from "@/app/utils/jwt"
import { z } from "zod"
import getUserByParam from "../../getUserByParam"
import { genHashPassword } from "@/app/utils/bcryptjs"

type userType = Omit<z.infer<typeof userZodSchema>, "cPassword">;

async function saveUserToDB(data: userType) {
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

export async function POST(req: NextRequest) {
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
            role,
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
            role,
            roll
        })

        const token = generateToken(createdUser.roll, role)

        if (!token) {
            return NextResponse.json(
                {
                    success: false,
                    message: "JWT Secret not defined",
                },
                { status: 500 }
            )
        }

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
