import {SET_PRODUCTS} from '../constants/constants'
import {IProduct} from "../actions/productAction";

export interface IProd {
    product: IProduct[]
}

const initialState: IProd = {
    product: []
}

export const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state
    }
}