import {SET_DAY_PRODUCTS, SET_DAY_PRODUCTS_CLEAR} from '../constants/constants'
import {IProduct} from '../../interfaces/product.interface'

interface IReduxProduct {
    dayProducts: IProduct[]
}

const initialState: IReduxProduct = {
    dayProducts: []
}

export const dayProductReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_DAY_PRODUCTS:
            return {
                ...state,
                dayProducts: [...state.dayProducts, action.payload]
            }
        case SET_DAY_PRODUCTS_CLEAR:
            return {
                ...state,
                dayProducts: []
            }
        default:
            return state
    }
}