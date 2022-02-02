import {Dispatch} from 'redux'
import {$authHost, $host} from '../../http'
import {Api, SET_ONE_PRODUCT, SET_PRODUCTS,} from '../constants/constants'
import {IProduct} from '../../interfaces/product.interface'
import axios from 'axios'

export const getProducts = () => {
    return async (dispatch: Dispatch) => {
        const res = await axios.get<IProduct[]>(Api + 'product')
        dispatch(setProducts(res.data))
    }
}

export const getOneProduct = (id: string | undefined) => {
    return async (dispatch: Dispatch) => {
        const res = await axios.get<IProduct[]>(Api + `product/${id}`)
        dispatch(setOneProduct(res.data))
    }
}

export const addProduct = async (formData: any) => {
    return await $authHost.post<IProduct[]>(Api + 'product', formData)
}

export const setProducts = (products: IProduct[]) => ({type: SET_PRODUCTS, payload: products})
export const setOneProduct = (oneProduct: IProduct[]) => ({type: SET_ONE_PRODUCT, payload: oneProduct})