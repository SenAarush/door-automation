import bcryptjs from "bcryptjs"

export async function genHashPassword(
    password: string,
    rounds: number = 10
) {
    const salt = await bcryptjs.genSalt(rounds)
    const hashedPassword = await bcryptjs.hash(password, salt)
    return hashedPassword as string
}