import React from 'react'
import {ReactComponent as ReviewIcon} from './review.svg'
import styles from './Review.module.scss'
import {ReviewProps} from "./Review.props";

const Review = ({review, children,className,...props}: ReviewProps) => {
    return (
        <div {...props} className={styles.review}>
            <ReviewIcon className={styles.reviewIcon}/>
            {
                review <= 0
                    ?
                    <span>Добавить отзыв</span>
                    :
                    <span>{review} отзыва</span>
            }
        </div>
    )
}

export default Review;