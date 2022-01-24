import {Dispatch} from "redux";
import {$authHost, $host} from "../../http";
import {Api, SET_ONE_TV, SET_TV} from "../constants/constants";
import axios from "axios";

export interface ITv {
    brandId: number
    createdAt: string
    id: number
    img: string[]
    name: string
    price: number
    oldPrice: number
    rating: number
    typeId: number
    updatedAt: string
    info: string[]
}

export const getTv = () => {
    return async (dispatch: Dispatch) => {
        const res = await axios.get<ITv[]>(Api + 'tv')
        dispatch(setTv(res.data))
    }
}

export const getOneTv = (id: string | undefined) => {
    return async (dispatch: Dispatch) => {
        const res = await axios.get<ITv[]>(Api + `tv/${id}`)
        dispatch(setOneTv(res.data))
    }
}

export const addTv = (formData: any) => {
    return async (dispatch: Dispatch) => {
        await $authHost.post(Api + 'tv', formData)
    }
}

export const setTv = (tv: ITv[]) => ({type: SET_TV, payload: tv})
export const setOneTv = (oneTv: ITv[]) => ({type: SET_ONE_TV, payload: oneTv})