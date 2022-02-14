import React from 'react'
import {ReactComponent as ReviewIcon} from './review.svg'
import {ReviewProps} from './Review.props'
import styles from './Review.module.scss'

const Review = ({review, children,className,...props}: ReviewProps): JSX.Element => {

    return (
        <div {...props} className={styles.review}>
            <ReviewIcon className={styles.reviewIcon}/>
            {
                review <= 0
                    ?
                    <span>Добавить отзыв</span>
                    : review === 1
                    ?
                    <span>{review} отзыв</span>
                    :
                    <span>{review} отзыва</span>
            }
        </div>
    )
}

export default Review