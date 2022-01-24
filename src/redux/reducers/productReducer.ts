import {SET_ONE_TV, SET_TV} from '../constants/constants'
import {ITv} from "../actions/productAction";

export interface IProd {
    tv: ITv[]
    oneTv: any []
}

export interface IOneTv {
    name: string
    id: number
    img: string
    price: number
    oldPrice: number
    title: string
    description: string
    typeId: number
    deviceId: number
    tvId: number
}

const initialState: IProd = {
    tv: [],
    oneTv: []
}

export const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_TV:
            return {
                ...state,
                tv: action.payload,
                oneTv: []
            }
        case SET_ONE_TV:
            return {
                ...state,
                oneTv: action.payload
            }
        default:
            return state
    }
}