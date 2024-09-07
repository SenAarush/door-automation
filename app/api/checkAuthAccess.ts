import jwt from "jsonwebtoken";
import { AuthData, AuthToken } from "../types/auth";

export default function checkAuthAccess(
    token: string,
    authorizedRoles: string[] | string
): AuthData | false {

    if (!token) return false

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET not defined")
    }

    let decodedToken: AuthToken

    try {
        decodedToken = jwt.verify(token, process.env.JWT_SECRET) as AuthToken
    } catch (error) {
        console.error("Invalid token:", error)
        return false
    }

    if (!decodedToken) return false

    const authenticatedData: AuthData = {
        roll: decodedToken.roll,
        roles: decodedToken.roles
    }

    const roleSet = new Set(Array.isArray(authorizedRoles) ? authorizedRoles : [authorizedRoles])

    return authenticatedData.roles.some(role => roleSet.has(role)) ? authenticatedData : false

}
