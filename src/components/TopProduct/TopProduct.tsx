import React, {useState} from 'react';
import styles from "./TopProduct.module.scss";
import {Button} from "../Button/Button";
import {TopProductProps} from "./TopProduct.props";
import cn from "classnames";
import Arrow from "../Arrow/Arrow";
import CardItem from "../CardItem/CardItem";

const TopProduct = ({className, tv}: TopProductProps) => {
    const IMG_WIDTH = 235
    const [offset, setOffset] = useState(0)
    const [slideIndex, setSlideIndex] = useState(0)

    const prevSlide = () => {
        setOffset((currentOffset) => {
            return Math.min(currentOffset + IMG_WIDTH, 0)
        })
        setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1)
    }

    const nextSlide = () => {
        if (slideIndex === tv.length - 4) {
            setSlideIndex(0)
            setOffset(0)
        } else {
            setOffset((currentOffset) => {
                return Math.max(currentOffset - IMG_WIDTH, - (IMG_WIDTH * (tv.length - 4)))
            })
            setSlideIndex(slideIndex + 1)
        }
    }

    return (
        <div className={cn(styles.wrapperSwipe, className)}>
            <h2>Рекомендуем вам</h2>
            <Arrow appearance='left' background='white' onClick={prevSlide} className={styles.arrowLeft}/>
            <Arrow appearance='right' background='white' onClick={nextSlide} className={styles.arrowRight}/>
            <div className={styles.nav}>
                <Button appearance='ghost' className={styles.btn}>Персональная подборка</Button>
                <Button appearance='ghost' className={styles.btn}>Хиты продаж</Button>
                <Button appearance='ghost' className={styles.btn}>Топ новинок</Button>
            </div>
            <div className={styles.cardBlock}>
                <div className={styles.cardGrid}>
                    {tv.map((p: any) =>
                        <CardItem key={p.id} product={p} offset={offset} appearance='topProduct'/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TopProduct