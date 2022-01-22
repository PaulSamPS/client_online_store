import {SET_BRAND, SET_PRODUCTS} from '../constants/constants'
import {IProduct} from "../actions/productAction";

export interface IBrand {
    brand: any[]
}

const initialState: IBrand = {
    brand: []
}

export const brandReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_BRAND:
            return {
                ...state,
                brand: action.payload
            }
        default:
            return state
    }
}