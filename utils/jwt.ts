import jwt from "jsonwebtoken";

export function generateToken(
    roll: number,
    roles = ["user"]
) {

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET not defined");
    }

    try {
        return jwt.sign(
            { roll, roles },
            process.env.JWT_SECRET,
            { expiresIn: "3hr" }
        )
    } catch (error) {
        console.log("Error generating JWT token", error)
        throw new Error("Token generation failed")
    }
}
