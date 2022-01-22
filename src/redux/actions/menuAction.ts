import {Dispatch} from "redux";
import axios, {AxiosResponse} from "axios";
import {Api, SET_BRAND, SET_MENU, SET_PRODUCTS, SET_TYPE} from "../constants/constants";
import {$authHost, $host} from "../../http";

export const createType = (name: any) => {
    return async (dispatch: Dispatch) => {
        await $authHost.post(Api + 'type', name)
    }
}

export const getMenu = () => {
    return async (dispatch: Dispatch) => {
        const res = await $host.get(Api + 'menu')
        dispatch(setMenu(res.data))
    }
}

export const setMenu = (menu: []) => ({type: SET_MENU, payload: menu})
