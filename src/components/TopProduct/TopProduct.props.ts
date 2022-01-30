import {DetailedHTMLProps, HTMLAttributes} from 'react'
import {ITvs} from "../DayProduct/DayProduct.props";

export interface TopProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    tv: ITvs[]
}