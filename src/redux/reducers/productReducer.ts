import {SET_ONE_PRODUCT, SET_PRODUCTS} from '../constants/constants'
import {IProduct} from '../../interfaces/product.interface'

interface IReduxProduct {
    products: IProduct[]
    oneProduct: any []
}

const initialState: IReduxProduct = {
    products: [],
    oneProduct: []
}

export const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                oneProduct: []
            }
        case SET_ONE_PRODUCT:
            return {
                ...state,
                oneProduct: action.payload
            }
        default:
            return state
    }
}