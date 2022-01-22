import {Dispatch} from "redux";
import axios, {AxiosResponse} from "axios";
import {Api, SET_BRAND, SET_PRODUCTS, SET_TYPE} from "../constants/constants";
import {$authHost, $host} from "../../http";

export const brand = (name: any) => {
    return async (dispatch: Dispatch) => {
        await $authHost.post(Api + 'brand', name)
    }
}

export const getBrands = () => {
    return async (dispatch: Dispatch) => {
        const res = await $host.get(Api + 'brand')
        dispatch(setBrands(res.data))
    }
}

export const setBrands = (types: []) => ({type: SET_BRAND, payload: types})