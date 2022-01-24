import {SET_MENU} from '../constants/constants'

export interface IBrand {
    menu: any[]
}

const initialState: IBrand = {
    menu: []
}

export const menuReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_MENU:
            return {
                ...state,
                menu: action.payload
            }
        default:
            return state
    }
}