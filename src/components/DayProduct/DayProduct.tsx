import React, {useState} from 'react'
import styles from './DayProduct.module.scss'
import Arrow from "../Arrow/Arrow";
import Dots from "../Dots/Dots";
import CardItem from "../CardItem/CardItem";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {DayProductProps} from "./DayProduct.props";
import Rating from "../Rating/Rating";
import Review from "../Review/Review";
import {priceRu} from "../../helpers/helpers";
import {ReactComponent as CartLogo} from "./cart.svg";


const DayProduct = ({tv}: DayProductProps) => {
    const [rating, setRating] = useState<number>(4)
    const [review, setReview] = useState<number>(4)
    const [offset, setOffset] = useState(0)
    const [slideIndex, setSlideIndex] = useState(0)
    const IMG_WIDTH = 220
    const left = () => {
        setOffset((currentOffset) => {
            return Math.min(currentOffset + IMG_WIDTH, 0)
        })
        setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1)
    }

    const right = () => {
        if (slideIndex === tv.length - 1) {
            setSlideIndex(0)
            setOffset(0)
        } else {
            setOffset((currentOffset) => {
                return Math.max(currentOffset - IMG_WIDTH, - (IMG_WIDTH * (tv.length - 1)))
            })
            setSlideIndex(slideIndex + 1)
        }
    }

    const dots = (index: number) => {
        setSlideIndex(index)
        setOffset(-(index * IMG_WIDTH))
    }

    return (
        <div className={styles.dayProductBlock}>
            <h2>Товары дня</h2>
            <div className={styles.wrapper}>
                {tv.map((p: any) => <CardItem key={p.id} product={p} appearance='dayProduct' offset={offset}/>)}
                <Arrow appearance='left' background='white' onClick={left}/>
                <Arrow appearance='right' background='white' onClick={right}/>
            </div>
            <div className={styles.bl}>
                <Dots slideIndex={slideIndex} dots={dots} arr={tv}/>
            </div>
        </div>
    )
}

export default DayProduct