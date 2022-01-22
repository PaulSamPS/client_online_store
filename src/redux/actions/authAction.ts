import {Dispatch} from 'redux'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import {SET_ACCOUNT_NAME, SET_AUTH, SET_ERROR_AUTH_MESSAGE, SET_TOKEN, SET_USER} from '../constants/constants'
import {$host} from "../../http";

export interface IAuthForm {
    password: string
    userName: string
}

export interface IAuthSentResponse {
    message: string
    token: string
}

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
export const setToken = (token: string) => ({type: SET_TOKEN, payload: token})
export const setErrorAuthMessage = (message: string) => ({type: SET_ERROR_AUTH_MESSAGE, payload: message})
