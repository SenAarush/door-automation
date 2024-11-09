export interface IUserInput {
    name: string
    password: string
    cPassword: string
    email: string
    branch: string
    domain: string
    roles: string[]
    roll: string | number
}

export interface AuthToken {
    roll: number
    roles: string[]
}

export interface AuthData {
    roll: number
    roles: string[]
}

export enum AuthRoles {
    admin = "admin",
    coordinator = "coordinator",
    assistant_coordinator = "assistant_coordinator",
    lead = "lead",
    memeber = "member",
    guest = "guest"
}



