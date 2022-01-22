import {DetailedHTMLProps, HTMLAttributes} from 'react'

export interface DotsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    slideIndex: number
    dots: (dots: number) => void
    arr: any[]
}