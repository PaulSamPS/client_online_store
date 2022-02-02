import {Dispatch} from 'redux'
import {Api, SET_BRAND} from '../constants/constants'
import {$authHost, $host} from '../../http'

export const createBrand = async (name: any) => {
    return await $authHost.post(Api + 'brand', name)
}

export const getBrands = () => {
    return async (dispatch: Dispatch) => {
        const res = await $host.get(Api + 'brand')
        dispatch(setBrands(res.data))
    }
}

export const setBrands = (brands: []) => ({type: SET_BRAND, payload: brands})