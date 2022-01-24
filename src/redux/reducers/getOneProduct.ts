import {SET_ONE_TV, SET_TV} from '../constants/constants'

export interface IProd {
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
    oneTv: []
}

export const oneTvReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ONE_TV:
            return {
                oneTv: action.payload
            }
        default:
            return state
    }
}