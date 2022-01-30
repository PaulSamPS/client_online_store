import {DetailedHTMLProps, HTMLAttributes} from 'react'
export interface IInfo {
    title: string
    description: string
    id: number
    tvId: number
}

interface IImg {
    filename: string
}

export interface ITvs {
    id: number
    name: string
    rating: number
    img: string
    price: number
    oldPrice: number
    brandId: number
    typeId: number
    info: IInfo[]
}

export interface DayProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    tv: ITvs[]
}