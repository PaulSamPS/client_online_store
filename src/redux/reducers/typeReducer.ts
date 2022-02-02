import {SET_TYPES} from '../constants/constants'
import {IReduxType} from '../../interfaces/type.interface'

const initialState: IReduxType = {
    type: []
}

export const typeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_TYPES:
            return {
                ...state,
                type: action.payload
            }
        default:
            return state
    }
}