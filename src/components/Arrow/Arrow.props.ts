import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react'

export interface ArrowProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'left' | 'right'
    background: 'white' | 'none'
}