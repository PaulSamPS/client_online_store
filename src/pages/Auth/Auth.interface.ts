export interface IAuthForm {
    email: string
    password: string
    userName: string
}

export interface IAuthSentResponse {
    message: string
    token: string
}

export interface ILocation {
    pathname: string
}