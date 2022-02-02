import React, {useEffect, useState, KeyboardEvent} from 'react'
import {RatingProps} from './Rating.props'
import {ReactComponent as StarIcon} from './star.svg'
import cn from 'classnames'
import styles from './Rating.module.scss'

const Rating = ({isEditable = false, rating, setRating, className, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() => {
        constructRating(rating)
    },[rating])

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: index < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(index + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(index + 1)}
                >
                    <StarIcon
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, e)}
                    />
                </span>
            )
        })
        setRatingArray(updatedArray)
    }

    const changeDisplay = (index: number) => {
        if (!isEditable) {
            return
        }
        constructRating(index)
    }

    const onClick = (index: number) => {
        if (!isEditable || !setRating) {
            return
        }
        setRating(index)
    }

    const handleSpace = (index: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space'|| !setRating) {
            return
        }
        setRating(index)
    }

    return (
        <div {...props}>
            {isEditable
                ?
                    ratingArray.map((rating,index) => <span key={index}>{rating}</span>)
                :
                    <div className={styles.ratingBlock}>
                        <span>{ratingArray[0]}</span>
                        <span>{rating}</span>
                    </div>
            }
        </div>
    )
}

export default Rating