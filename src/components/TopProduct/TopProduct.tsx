import React, {useState} from 'react'
import {Button} from '../Button/Button'
import {TopProductProps} from './TopProduct.props'
import cn from 'classnames'
import Arrow from '../Arrow/Arrow'
import CardItem from '../CardItem/CardItem'
import {IProduct} from '../../interfaces/product.interface'
import styles from './TopProduct.module.scss'

const TopProduct = ({className, product}: TopProductProps): JSX.Element => {
    const [offset, setOffset] = useState<number>(0)
    const [slideIndex, setSlideIndex] = useState<number>(0)
    const IMG_WIDTH = 235

    const prevSlide = () => {
        setOffset((currentOffset: number) => {
            return Math.min(currentOffset + IMG_WIDTH, 0)
        })
        setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1)
    }

    const nextSlide = () => {
        if (slideIndex === product.length - 4) {
            setSlideIndex(0)
            setOffset(0)
        } else {
            setOffset((currentOffset: number) => {
                return Math.max(currentOffset - IMG_WIDTH, - (IMG_WIDTH * (product.length - 4)))
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
                    {product.map((product: IProduct) =>
                        <CardItem key={product.id} product={product} offset={offset} appearance='topProduct'/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TopProduct