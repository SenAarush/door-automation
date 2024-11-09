import { IUserInput } from "@/types/auth"

export const signup = async (user: IUserInput) => {
    const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    return await response.json()
}