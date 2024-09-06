import userModel from "../models/user"

export default async function getUserByParam(
    param: number | string,
    paramName: string
) {
    try {
        const user = await userModel.findOne({ [paramName]: param });
        return user
    } catch (error) {
        console.log(error)
        throw new Error("Error finding user in DB")
    }
}