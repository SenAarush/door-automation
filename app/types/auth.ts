interface AuthToken {
    roll: number
    roles: string[]
}

interface AuthData {
    roll: number
    roles: string[]
}

export type {
    AuthToken,
    AuthData
}