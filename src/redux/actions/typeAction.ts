import {Dispatch} from 'redux'
import {Api,SET_TYPES} from '../constants/constants'
import {$authHost, $host} from '../../http'
import {IType} from "../../interfaces/type.interface";

export const createType = async (name: any) => {
    return await $authHost.post(Api + 'type', name)
}

export const getTypes = () => {
    return async (dispatch: Dispatch) => {
        const res = await $host.get(Api + 'type')
        dispatch(setTypes(res.data))
    }
}

export const setTypes = (types: []) => ({type: SET_TYPES, payload: types})
