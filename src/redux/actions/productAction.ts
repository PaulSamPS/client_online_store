import {Dispatch} from "redux";
import {$authHost, $host} from "../../http";
import jwtDecode from "jwt-decode";
import {Api, SET_PRODUCTS} from "../constants/constants";
import axios, {AxiosResponse} from "axios";

export interface IProduct {
    brandId: number
    category: string
    createdAt: string
    id: number
    img: string
    name: string
    price: number
    rating: number
    size: string[]
    typeId: number
    updatedAt: string
}

export const getProducts = () => {
    return async (dispatch: Dispatch) => {
        const res = await axios.get<IProduct[]>(Api + 'products')
        dispatch(setProducts(res.data))
    }
}

export const addProduct = (formData:any) => {
    return async (dispatch: Dispatch) => {
        await $authHost.post(Api + 'products', formData)
    }
}

export const setProducts = (products: IProduct[]) => ({type: SET_PRODUCTS, payload: products})