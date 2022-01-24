import {SET_TYPE} from '../constants/constants'

export interface IBrand {
    type: any[]
}

const initialState: IBrand = {
    type: []
}

export const typeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_TYPE:
            return {
                ...state,
                type: action.payload
            }
        default:
            return state
    }
}