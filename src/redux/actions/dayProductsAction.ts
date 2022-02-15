import {IProduct} from "../../interfaces/product.interface";
import {SET_DAY_PRODUCTS, SET_DAY_PRODUCTS_CLEAR} from "../constants/constants";

export const setDayProducts = (products: IProduct[]) => ({type: SET_DAY_PRODUCTS, payload: products})
export const setDayProductsClear = (products: []) => ({type: SET_DAY_PRODUCTS_CLEAR, payload: products})