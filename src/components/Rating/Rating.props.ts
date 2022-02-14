import {DetailedHTMLProps, HTMLAttributes} from 'react'

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean
    isFully?: boolean
    rating: number
    setRating?: (rating: number) => void
}