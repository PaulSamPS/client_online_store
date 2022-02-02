import {Dispatch} from 'redux'
import jwtDecode from 'jwt-decode'
import {SET_ERROR_AUTH_MESSAGE, SET_TOKEN, SET_USER} from '../constants/constants'
import {$host} from '../../http'
import {IAuthForm, IAuthSentResponse} from '../../interfaces/auth.interface'


export const login = ({password,userName}: IAuthForm): any => {
    return async (dispatch: Dispatch) => {
        const {data} = await $host.post<IAuthSentResponse>('user/login', {password,userName})
        localStorage.setItem('AccessToken', 'Bearer ' + data.token)
        dispatch(setUser(jwtDecode(data.token)))
        return jwtDecode(data.token)
    }
}

export const registration = ({password,userName}: IAuthForm): any => {
    return async (dispatch: Dispatch) => {
        const {data} = await $host.post<IAuthSentResponse>('user/registration', {password,userName})
        localStorage.setItem('AccessToken', 'Bearer ' + data.token)
        dispatch(setUser(jwtDecode(data.token)))
        return jwtDecode(data.token)
    }
}

export const setUser = (user: {}) => ({type: SET_USER, payload: user})
export const setErrorAuthMessage = (message: string) => ({type: SET_ERROR_AUTH_MESSAGE, payload: message})
