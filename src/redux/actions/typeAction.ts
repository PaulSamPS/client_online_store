import {Dispatch} from "redux";
import axios, {AxiosResponse} from "axios";
import {Api, SET_BRAND, SET_PRODUCTS, SET_TYPE} from "../constants/constants";
import {$authHost, $host} from "../../http";

export const createType = (name: any) => {
    return async (dispatch: Dispatch) => {
        await $authHost.post(Api + 'type', name)
    }
}

export const getTypes = () => {
    return async (dispatch: Dispatch) => {
        const res = await $host.get(Api + 'type')
        dispatch(setTypes(res.data))
    }
}

export const setTypes = (types: []) => ({type: SET_TYPE, payload: types})
