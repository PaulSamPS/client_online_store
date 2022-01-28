import {DetailedHTMLProps, HTMLAttributes} from 'react'

export interface ProductCardSliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    image: string
    offset: number
}