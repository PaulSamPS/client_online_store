import {SET_ERROR_AUTH_MESSAGE, SET_TOKEN, SET_USER} from '../constants/constants'
import {IUser} from '../../interfaces/user.interface'

interface UserState {
    errorMessage: string
    userInfo: IUser
}

const initialState: UserState = {
    errorMessage: '',
    userInfo: {
        userName: '',
        role: '',
        email: ''
    }
}

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ERROR_AUTH_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload
            }
        case SET_USER:
            return {
                ...state,
                errorMessage: '',
                userInfo: action.payload
            }
        default:
            return state
    }
}