import {SET_MENU} from '../constants/constants'
import {IReduxMenu} from '../../interfaces/menu.interface'

const initialState: IReduxMenu = {
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