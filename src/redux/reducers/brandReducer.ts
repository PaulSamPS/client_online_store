import {SET_BRAND} from '../constants/constants'
import {IReduxBrand} from '../../interfaces/brand.interface'

const initialState: IReduxBrand = {
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